import os, dotenv

# read env variables from the .env file
dotenv.load_dotenv()

DB_URL = os.getenv("DB_URL")
DB_NAME = os.getenv("DB_NAME")
