FROM python:3.9-slim

WORKDIR /app

COPY ./ .

# We decided to use old version for paho-mqtt (1.x)
RUN pip install --no-cache-dir pymongo paho-mqtt==1.6.1 python-dotenv==0.21.0 pytz

CMD ["python", "mqtt_subscriber.py"]


