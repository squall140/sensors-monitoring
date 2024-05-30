from pymongo import mongo_client
import pymongo
from config import global_settings

dbclient = mongo_client.MongoClient(global_settings.DB_URL)
print('MongoDB connected!')

db = dbclient[global_settings.MONGO_DB_NAME]
Sensor = db['Sensors']
Sensor.create_index([("timestamp"),pymongo.ASCENDING], unique=True)