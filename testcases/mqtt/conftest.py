import random

import pytest
import paho.mqtt.client as mqtt

from mqtt.time_util import time_generator

sensors = []
def pytest_runtest_setup(item):
    print(f"\n--------Before---------")

    for _ in range(2000):
        equipmentId = str("EQ-" +  str(random.randint(10001, 12000)))
        timestamp = str(time_generator())
        value =  round(random.uniform(0, 150), 2)
        sensors.append({'equipmentId': equipmentId, 'timestamp': timestamp, 'value': value})

    return sensors


def pytest_runtest_teardown(item):
    print(f"\n--------After--------")

#
# @pytest.fixture
# def mqtt_client():
#     client = mqtt.Client()
#     client.on_connect = on_connect
#     client.connect('127.0.0.1', 1883, 60)
#     return client
#
# def on_connect(self, userdata, flags, rc):
#     print("Broker Connected!" + str(rc))