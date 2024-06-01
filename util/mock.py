import random

from util.time_util import time_generator

def mock_sensor_data():
    """
    mock sensor data
    :return: a sensor array
    """
    sensors = []
    for _ in range(2000):
        equipmentId = str("EQ-" +  str(random.randint(10001, 12000)))
        timestamp = str(time_generator())
        value = "{:.2f}".format(random.uniform(0, 150))
        sensors.append({'equipmentId': equipmentId, 'timestamp': timestamp, 'value': value})

    return sensors