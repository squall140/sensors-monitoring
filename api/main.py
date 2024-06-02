from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routers import sensor

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# routers
app.include_router(sensor.router, tags=['Sensors'], prefix='/api/sensor')

@app.get("/")
def root():
    return {"message": "running!"}

@app.get("/api/alive")
def alive():
    return {"message": "I'm alive!"}