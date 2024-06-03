import dotenv

# read env variables from the .env file
dotenv.load_dotenv()

DB_URL = "mongodb://admin:adminmqtt@127.0.0.1:27017/sensor-monitor?authSource=admin"
DB_NAME = "sensor-monitor"

MQTT_BROKER = "127.0.0.1"
MQTT_BROKER_PORT = 1883
MQTT_TOPIC = "sensor-realtime-data"

