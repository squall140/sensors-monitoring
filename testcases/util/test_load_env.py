import os, dotenv
def test_load_env():
    dotenv.load_dotenv()

    DB_URL = os.getenv("DB_URL")
    DB_NAME = os.getenv("DB_NAME")

    MQTT_BROKER = os.getenv("MQTT_BROKER")
    MQTT_BROKER_PORT = int(os.getenv("MQTT_BROKER_PORT"))
    MQTT_TOPIC = os.getenv("MQTT_TOPIC")

    assert DB_URL == "mongodb://admin:adminmqtt@mongo:27017/sensor-monitor?authSource=admin"
    assert DB_NAME == "sensor-monitor"
    assert MQTT_BROKER == "broker"
    assert MQTT_BROKER_PORT == 1883
    assert MQTT_TOPIC == "sensor-realtime-data"