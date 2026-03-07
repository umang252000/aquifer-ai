from pymongo import MongoClient
import os

client = MongoClient("mongodb://localhost:27017")

db = client["aquifer_ai"]

suppliers_collection = db["suppliers"]
orders_collection = db["orders"]