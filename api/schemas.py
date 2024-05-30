from datetime import datetime

from bson import ObjectId
from pydantic import BaseModel, constr

class SensorBaseSchema(BaseModel):
    equipmentId: str
    timestamp: datetime
    value: float

    class Config:
        # Deprecated in V1
        # orm_mode = True
        # allow_population_by_field_name = True
        from_attributes = True
        populate_by_name = True
        json_encoders = {ObjectId: str}


class CreateSensorSchema(SensorBaseSchema):
    equipmentId: constr(min_length=3)
    pass


class SensorResponse(SensorBaseSchema):
    equipmentId: str
    timestamp: datetime

