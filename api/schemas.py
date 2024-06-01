from datetime import datetime

from bson import ObjectId
from pydantic import BaseModel, constr

# define a sensor schema based on the BaseModel provided by pydantic
# we can easily do some param validation using annotation
# furthermore, when we need to implement a domain driven design, we also need DTO,
# the using of this schema is also like DTO(Data Transfer Object)
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

