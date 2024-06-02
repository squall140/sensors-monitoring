import json
import pandas as pd

from fastapi import APIRouter, status, HTTPException, Response, UploadFile
import schemas
from mongodb import Sensor
from util.time_util import time_generator


router = APIRouter()

@router.get('/getSensorAverageData')
def get_sensor_average_data():
    """
    Returns the average sensor data for different time period.
    Including 24 hours, 48 hours, weekly and monthly.

    :return: JsonObject
    """
    arr_time = [0,5,3,5]
    labels =['24 hours', '48 hours', 'weekly', 'monthly']
    values = []
    for i in arr_time:
        pipeline = [
            {'$match': {'timestamp': {'$lte': time_generator(i)}}},
            {'$group': {
                '_id': None,
                'average': {'$avg': '$value'}
            }}
        ]

        cursor = Sensor.aggregate(pipeline)
        objDict = list(cursor)[0]
        average = "{:.2f}".format(objDict['average'])
        values.append(average)
        # objDict['hours'] = i

    return {
        "status": 200,
        "labels": labels,
        "values": values
    }

@router.post('/add', status_code=status.HTTP_201_CREATED)
def create_sensor(sensor: schemas.CreateSensorSchema):
    """
    Adds a new sensor to the database.
    :param sensor:
    :return:
    """
    try:
        result = Sensor.insert_one(sensor.dict())
        if result.inserted_id:
            return Response(status_code=status.HTTP_201_CREATED)
    except Exception:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@router.post('/import', status_code=status.HTTP_201_CREATED)
async def import_csv(file: UploadFile) -> dict:
    """
    Imports a CSV file into a database.
    :param file: .csv file
    :return: JsonObject
    """
    data = pd.read_csv(file.file)
    file.file.close()
    data_json = json.loads(data.to_json(orient='records'))
    Sensor.insert_many(data_json)
    return {
        "message": "data imported successfully",
        "status": 200
    }



