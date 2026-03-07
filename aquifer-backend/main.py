from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.product import ProductRequest
from services.procurement_service import start_procurement
from utils.logger import get_logs

app = FastAPI()

# Allow frontend requests
origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Aquifer AI Procurement Agent Running"}

@app.post("/procure")
def procure_product(product: ProductRequest):

    result = start_procurement(product.name, product.quantity)

    return {
        "status": "completed",
        "result": result
    }

@app.get("/logs")
def agent_logs():
    return {"logs": get_logs()}