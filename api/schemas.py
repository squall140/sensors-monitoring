from __future__ import annotations

from datetime import datetime
from pydantic import BaseModel
from bson.objectid import ObjectId


class SensorBaseSchema(BaseModel):
    equipment_id: str
    timestamp: datetime
    value: float
    # Pydantic Bug
    created_at: datetime | None = None
    updated_at: datetime | None = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class SensorResponse(SensorBaseSchema):
    equipment_id: str
    timestamp: datetime


