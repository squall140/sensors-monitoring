import json, random, time
import paho.mqtt.client as mqtt
import util.envs as envs

from util.time_util import time_generator

"""
We assume that we need to monitor the temperature of our machines. Valid temperature range should be between 30 to 100. 
In this case we need to do sensors validation first. 
"""

def is_valid_sensor(equipment_id):
    if not equipment_id.startswith('EQ'):
        raise ValueError("Unknown request")


# TODO: for tes
sensors = []
for _ in range(2000):
    equipment_id = str("EQ-" +  str(random.randint(10001, 12000)))
    timestamp = str(time_generator())
    value = 88.42
    sensors.append({'equipment_id': equipment_id, 'timestamp': timestamp, 'value': value})


def on_connect(self, userdata, flags, rc):
    print("Connected!" + str(rc))
    # subscribe channel in callback
    self.subscribe(envs.MQTT_TOPIC)


# try to set up connection with MQTT broker
client = mqtt.Client()
client.on_connect = on_connect
client.connect(envs.MQTT_BROKER, envs.MQTT_BROKER_PORT, 60)

while True:
    for sensor in sensors:
        # sensor data validation
        is_valid_sensor(sensor['equipment_id'])
        json_payload = json.dumps(sensor)
        client.publish(envs.MQTT_TOPIC, json_payload)
    # 2000 records writing operation per second
    time.sleep(1)
