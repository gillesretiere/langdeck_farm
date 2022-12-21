from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import CountryBase, CountryDB, CountryUpdate

router = APIRouter()

#--- list one country by region uid
@router.get("/{uid}", response_description="List a country by uid")
async def list_country_by_id (request: Request, uid: str):
    print (uid)
    query = [
    {
        '$match': {
            'region_uid': uid
        }
    }]
    full_query = request.app.mongodb['countries'].aggregate(query)
    results = [el async for el in full_query]
    return results
