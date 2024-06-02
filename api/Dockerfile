# introduce an official slim version as basic image
FROM python:3.9-slim

# current working directory
WORKDIR /app

# copy contents into the docker container at "/app"
COPY ./ .

# dependencies install
RUN pip install --no-cache-dir uvicorn fastapi pymongo pandas

# expose 8000
EXPOSE 8000


CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
