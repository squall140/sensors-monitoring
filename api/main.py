from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routers import sensor

app = FastAPI()

origins = [
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8080",
    "http://127.0.0.1"
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