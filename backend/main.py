from fastapi.middleware.cors import CORSMiddleware
from decouple import config
import uvicorn
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from routers.localizer import router as localizer_router
from routers.regions import router as regions_router
from routers.countries import router as countries_router
from routers.languages import router as languages_router
from routers.regionCountries import router as regionCountries_router
from routers.translators import router as translators_router
from routers.vocalangthemes import router as vocalangthemes_router
from routers.stories import router as stories_router

HOST = config('HOST', cast=str)
DOMAIN = config('DOMAIN', cast=str)
WWW_DOMAIN = config('WWW_DOMAIN', cast=str)

origins = [
"http://localhost",
"http://localhost:8080",
"http://localhost:3000",
"http://localhost:8000",
"http://"+HOST,
"http://"+HOST+":8080",
"http://"+HOST+":8000",
"http://"+HOST+":3000",
"http://"+DOMAIN,
"http://"+DOMAIN+":8080",
"http://"+DOMAIN+":8000",
"http://"+DOMAIN+":3000",
"http://"+WWW_DOMAIN,
"http://"+WWW_DOMAIN+":8080",
"http://"+WWW_DOMAIN+":8000",
"http://"+WWW_DOMAIN+":3000",
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

app.include_router(localizer_router, prefix="/localizer", tags=["localizer"])
app.include_router(regions_router, prefix="/regions", tags=["regions"])
app.include_router(countries_router, prefix="/countries", tags=["countries"])
app.include_router(languages_router, prefix="/languages", tags=["languages"])
app.include_router(regionCountries_router, prefix="/regionCountries", tags=["regionCountries"])
app.include_router(translators_router, prefix="/translators", tags=["translators"])
app.include_router(vocalangthemes_router, prefix="/vocalangthemes", tags=["vocalangthemes"])
app.include_router(stories_router, prefix="/stories", tags=["stories"])

if __name__ == "__main__":
    uvicorn.run("__main__:app",host='141.94.204.108',port=8000, reload=True)