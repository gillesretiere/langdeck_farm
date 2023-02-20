import csv
import json
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
collection = db[config['COUNTRY_COLLECTION_NAME']]

for rec in name_records:
    try:
        ctry = jsonable_encoder(CountryBase(**rec))  
        
        if len(ctry["country_languages"]):
            ctry["country_languages"] = eval(ctry["country_languages"])
        else :
            ctry["country_languages"] = []

        if len(ctry["country_facts"]):
            ctry["country_facts"] = eval(ctry["country_facts"])
        else :
            ctry["country_facts"] = []
            
        if len(ctry["wfb_facts"]):
            ctry["wfb_facts"] = eval(ctry["wfb_facts"])
        else :
            ctry["wfb_facts"] = []            
        #print (ctry["country_languages"])
        print("Inserting:",ctry)
        collection.insert_one(ctry)

    except Exception as e:
        print(e)
        pass