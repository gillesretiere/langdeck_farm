from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from routers.regions import router as regions_router
from routers.countries import router as countries_router
from routers.languages import router as languages_router

origins = [
"http://localhost",
"http://localhost:8080",
"http://localhost:3000",
"http://localhost:8000",
]

DB_URL = config('DB_URL', cast=str)
DB_NAME = config('DB_NAME', cast=str)

app = FastAPI()
app.add_middleware(
CORSMiddleware,
allow_origins=origins,
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(DB_URL)
    app.mongodb = app.mongodb_client[DB_NAME]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

app.include_router(regions_router, prefix="/regions", tags=["regions"])
app.include_router(countries_router, prefix="/countries", tags=["countries"])
app.include_router(languages_router, prefix="/languages", tags=["languages"])

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        reload=True
    )