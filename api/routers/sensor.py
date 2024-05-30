from datetime import datetime
from fastapi import APIRouter, status, HTTPException, Response
# from api import schemas

router = APIRouter()

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

