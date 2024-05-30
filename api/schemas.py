from datetime import datetime

from bson import ObjectId
from pydantic import BaseModel, constr

class SensorBaseSchema(BaseModel):
    equipment_id: str
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
    equipment_id: constr(min_length=3)
    pass


class SensorResponse(SensorBaseSchema):
    equipment_id: str
    timestamp: datetime

