from fastapi import FastAPI
from api.routers import sensor

app = FastAPI()

app.include_router(sensor.router, tags=['Sensors'], prefix='/api/sensor')


@app.get("/api/alive")
def root():
    return {"message": "I'm alive!"}