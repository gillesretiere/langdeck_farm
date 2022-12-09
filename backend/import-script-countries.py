import csv
from fastapi.encoders import jsonable_encoder

# dotenv environment variables
from dotenv import dotenv_values
from models import CountryBase

config = dotenv_values(".env")

# read csv
with open("countries.csv",encoding='utf-8') as f:
    csv_reader = csv.DictReader(f)
    name_records = list(csv_reader)

# Mongo db - we do not need Motor here
from pymongo import MongoClient
client = MongoClient()

client = MongoClient(config['DB_URL'])
db = client[config['DB_NAME']]
collection = db[config['COLLECTION_NAME']]

for rec in name_records:
    try:
        ctry = jsonable_encoder(CountryBase(**rec))  
        print("Inserting:",ctry)
        collection.insert_one(ctry)

    except Exception as e:
        print(e)
        pass