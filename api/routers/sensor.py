import json, pandas as pd
from fastapi import APIRouter, status, HTTPException, Response, UploadFile
from .. import schemas
from db.mongodb import Sensor

router = APIRouter()

@router.post('/add', status_code=status.HTTP_201_CREATED)
def create_sensor(sensor: schemas.CreateSensorSchema):
    try:
        result = Sensor.insert_one(sensor.dict())
        if result.inserted_id:
            return Response(status_code=status.HTTP_201_CREATED)
    except Exception:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@router.post('/import', status_code=status.HTTP_201_CREATED)
async def import_csv(file: UploadFile) -> dict:
    data = pd.read_csv(file.file)
    file.file.close()
    data_json = json.loads(data.to_json(orient='records'))
    Sensor.insert_many(data_json)
    return {
        'status': 'success',
        "message": "data imported successfully",
        "status": 200
    }


def populatedSensorEntity(sensor) -> dict:
    return {
        "equipmentId": str(sensor["equipmentId"]),
        "timestamp": sensor["timestamp"],
        "value": sensor["value"]
    }

