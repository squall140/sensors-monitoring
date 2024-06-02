import os, dotenv

# read env variables from the .env file
dotenv.load_dotenv()

DB_URL = os.getenv("DB_URL")
DB_NAME = os.getenv("DB_NAME")

MQTT_BROKER = os.getenv("MQTT_BROKER")
MQTT_BROKER_PORT = int(os.getenv("MQTT_BROKER_PORT"))
MQTT_TOPIC = os.getenv("MQTT_TOPIC")