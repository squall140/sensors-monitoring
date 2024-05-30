import json
import random
import time
import paho.mqtt.client as mqtt

# from api.schemas import SensorSchema
from util.time_util import format_datestr_with_zone, time_generator

"""
We assume that we need to monitor the temperature of our machines. Valid temperature range should be between 30 to 100. 
In this case we need to do sensors validation first. 
"""

def is_valid_sensor(equipment_id):
    if not equipment_id.startswith('EQ'):
        raise ValueError("Unknown request")


sensors = []
for _ in range(2000):
    equipment_id = "EQ-" +  str(random.randint(10001, 12000))
    timestamp = str(time_generator())
    value = 88.42
    sensors.append({'equipment_id': equipment_id, 'timestamp': timestamp, 'value': value})


broker_addr = "sensor-monitoring-broker"
broker_port = 1883
MQTT_TOPIC = "testtopic/002"


def on_connect(self, userdata, flags, rc):
    print("Connected!" + str(rc))
    self.subscribe(MQTT_TOPIC)


client = mqtt.Client()
client.on_connect = on_connect
client.connect('localhost', broker_port, 60)

while True:
    for sensor in sensors:
        # json validation
        is_valid_sensor(sensor['equipment_id'])
        json_payload = json.dumps(sensor)
        client.publish('testtopic/002',json_payload)
        time.sleep(1)
