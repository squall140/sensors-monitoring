import requests
from pathlib import Path


def test_server_alive():
    url = "http://127.0.0.1:8000/api/alive"
    response = requests.get(url)
    data = response.json()
    assert data["message"] == "I'm alive!"

def test_sensor_add():
    url = "http://127.0.0.1:8000/api/sensor/add"
    string_json= {
        "equipmentId": "EQ-12345",
        "timestamp": "2024-06-03T05:54:11.334Z",
        "value": 88.88
    }
    response = requests.post(url, json=string_json)
    assert response.status_code == 201


def test_import_csv():
    url = "http://127.0.0.1:8000/api/sensor/import"
    file_path = "/append.csv"
    file_path = str(Path(__file__).parent) + file_path
    with open(file_path, 'rb') as file:
        response = requests.post(url, files={"file": file})
    assert response.status_code == 201


def test_get_average_data():
    url = "http://127.0.0.1:8000/api/sensor/getSensorAverageData"
    response = requests.get(url)
    data = response.json()
    assert response.status_code == 200
    assert data["status"] == 200