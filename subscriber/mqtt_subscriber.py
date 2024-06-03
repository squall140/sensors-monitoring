import json
import paho.mqtt.client as mqtt
from mongodb import Sensor
import sub_util.envs as envs


def on_message(client, userdata, message):
    payload = message.payload.decode("utf-8")
    json_data = json.loads(payload)
    # insert into mongodb from message one by one
    Sensor.insert_one(json_data)

# try to set up connection with MQTT broker
client = mqtt.Client()
client.on_message = on_message
client.connect(envs.MQTT_BROKER, envs.MQTT_BROKER_PORT, 60)
client.subscribe(envs.MQTT_TOPIC)
client.loop_forever()
