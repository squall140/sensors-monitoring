from pymongo import mongo_client

import envs

# setting up connection with mongodb
dbclient = mongo_client.MongoClient(envs.DB_URL)
print('MongoDB connected!')

# db operator
db = dbclient[envs.DB_NAME]
# sensor collection
Sensor = db.sensors