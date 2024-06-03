import json

from random import random
from mqtt.conftest import sensors
from time_util import time_generator

"""
We assume that we need to monitor the temperature of our machines. Valid temperature range should be between 30 to 100. 
In this case we need to do sensors validation first. 
"""

def publish(mqtt_client):
    for sensor in sensors:
        # sensor data validation
        is_valid_sensor(sensor['equipmentId'])
        json_payload = json.dumps(sensor)
        mqtt_client.publish('sensor-realtime-data', json_payload)


def is_valid_sensor(equipmentId):
    if not equipmentId.startswith('EQ'):
        raise ValueError("Unknown request")

def mock_sensor_data():
    """
    mock sensor data (0 ~ 150)
    :return: a sensor array
    """
    sensors = []
    for _ in range(2000):
        equipmentId = str("EQ-" +  str(random.randint(10001, 12000)))
        timestamp = str(time_generator())
        value =  round(random.uniform(0, 150), 2)
        sensors.append({'equipmentId': equipmentId, 'timestamp': timestamp, 'value': value})

    return sensors