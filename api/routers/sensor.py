from fastapi import APIRouter, status, HTTPException, Response
from .. import schemas
from db.mongodb import Sensor

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED)
def create_sensor(sensor: schemas.CreateSensorSchema):
    try:
        result = Sensor.insert_one(sensor.dict())
        if result.inserted_id:
            return Response(status_code=status.HTTP_201_CREATED)
    except Exception:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)


@router.get('/')
def get_sensor_data(limit: int = 20, page: int = 1):
    skip = (page - 1) * limit
    # TODO:


def populatedSensorEntity(sensor) -> dict:
    return {
        "equipmentId": str(sensor["equipmentId"]),
        "timestamp": sensor["timestamp"],
        "value": sensor["value"]
    }

