import json
import envs as envs
from mongodb import Sensor
def on_message(client, userdata, message):
    payload = message.payload.decode("utf-8")
    json_data = json.loads(payload)
    # insert into mongodb from message one by one
    Sensor.insert_one(json_data)

def subscribe(mqtt_client):
    mqtt_client.on_message = on_message
    mqtt_client.subscribe(envs.MQTT_TOPIC)
    # for pytest we need to disable the loop feature in advance
    # mqtt_client.loop_forever()

