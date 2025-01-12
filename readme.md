### 1. Background

Assume a scenario, there are a lot of sensors in a large scale factory, we need to monitor each sensor data so that can easily monitor the health for all of our machines. The amount of sensors is around 2000 at this time, also we need to consider a suitable solution if the amount increase a large number.

### 2. Constraint

- Development languages 
  - Python (Backend)     https://github.com/squall140/sensors-monitoring
  - ReactJs (Frontend)   https://github.com/squall140/monitor

- Timeline 
  - A demo for beginning, all the works should be finished in a week
- Testing
  - Unit test & Api Test & Load Test
  - Unit Test report(generated by Pytest):  "./testcases/report.html" 
  - Load Test report(generated by JMeter):  "./loadtest/report_load_test_1000_threads_30min"
- Elegant deployment

### 3. Design

- Since we need to collect all of our sensors' data, the first comes to my mind is the network transfer. Based on this scenario, we need to choose a suitable network transfer protocol. From my understanding I think the best one is the MQTT protocol. Because its payload is very thin and light, allowing us to send and retrieve data to our server smoothly.

- We need a MQTT broker like a message queue, allow us to use the "pub/sub" feature to realize our goal. I decided to use the "Mosquito" for basic scenario.

- Data Transfer
  - Publisher: In most actual scenarios, Device sensors should support publisher function, we can easily write some code at the device end, sending data to our MQTT broker.
  - I just used a simple mock function to simulate the sensor data publishing process. 
  - Subscriber: We can easily deploy subscribers to retrieve data from the broker and transfer related data into our sequence database(mongodb).

- API Endpoint
  - Maybe we need to append some data manually, we can also use the API service.
  - API also support other HTTP services for further requirements.
  
- Stability & Extensibility
  - As a message queue, Mosquitto can allow us to retrieve data from itself. It That means if the pub/sub services was down and restarted, it also can send/fetch data from the broker mainly because of the persistent feature. That is why we decided to set up an independent broker or a broker cluster for a better stability.
  - When we need to consider expanding our system in order to reach a better system throughput, we only need to focus on the cluster mode based on this infrastructure rather than rebuild all of our system skeletons. For example, if we need monitor more sensors, we can easily deploy a new subscriber to listen to any data from each sensor, publishing these data to the broker. 

- Storage
  - At the beginning, we only need to monitor 2000 machines, that means we need a time-sequence data storage to keep our data.
  - At this time, I decided to choose MongoDB. A very simple algorithm as described below:
    - The data size of each sensor data package is around 80 bytes.
    - 80(B) * 2000 * 3600 * 24 = 12.87(GB)  That means perhaps we need to store 13GB into our database every day, 390(GB) per month.
  - I decided to use MongoDB mainly because the nice I/O performance, the writing bottleneck with single instance can reach almost 10,000 records per second.
### 4. Deployment

- git clone & cd ./release
- docker-compose up -d
- backend: http://127.0.0.1:8000/docs
- frontend: http://127.0.0.1:8080

### 5. Infrastructure Diagram

![mqtt_broker drawio](https://github.com/squall140/sensors-monitoring/assets/2128238/3f3d4075-6b7f-46ea-8f02-f0d89b363fc0)



  

  

  

  
