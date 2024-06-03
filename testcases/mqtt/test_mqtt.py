import sys
import pytest

import paho.mqtt.client as mqtt
from pathlib import Path
sys.path.append(str(Path(__file__).parent))
import mqtt_publisher, mqtt_subscriber

@pytest.fixture
def mqtt_client():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.connect('127.0.0.1', 1883, 60)
    return client

def on_connect(self, userdata, flags, rc):
    print("Broker Connected!" + str(rc))


def test_publish(mqtt_client):
    mqtt_publisher.publish(mqtt_client)


def test_subscribe(mqtt_client):
    mqtt_subscriber.subscribe(mqtt_client)