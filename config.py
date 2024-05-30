from pydantic import BaseSettings
'''
Global Settings 
'''
class Settings(BaseSettings):
    DB_URL: str
    DB_NAME: str

    class Config:
        env_file = '.env'

global_settings = Settings()