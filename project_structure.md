.
├── api 						// api endpoints using fastApi
│   ├── Dockerfile
│   ├── api_util
│   ├── append.csv
│   ├── main.py
│   ├── mongodb.py
│   ├── routers
│   └── schemas.py
├── frontend					// a simple bar chart using react-chartjs-2
│   ├── Dockerfile
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json			 // nvm use 18  -> npm install -> npm start
│   ├── public
│   └── src
├── publisher					
│   ├── Dockerfile			     
│   ├── mqtt_publisher.py
│   └── pub_util
├── readme.md
├── release					  // deployment scripts
│   ├── docker-compose.yml
│   └── mosquitto
├── requirements.txt			   // pip install 
├── subscriber
│   ├── Dockerfile
│   ├── mongodb.py
│   ├── mqtt_subscriber.py
│   └── sub_util
└── testcases				   // unit test (including api test)
    ├── api	
    ├── assets
    ├── mqtt
    ├── report.html
    └── util