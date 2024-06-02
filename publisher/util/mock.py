import random

from util.time_util import time_generator

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