from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import CountryBase, CountryDB, CountryUpdate

router = APIRouter()

#--- list countries by language uid
@router.get("/language/{uid}", response_description="list countries by language uid")
async def list_countries_by_lang_id (request: Request, uid: str):
    query = [
    {
        '$match': {
            'language_uid': uid
        }
    }, {"$project": {"language_countries.alpha-2_code":1}}]
    full_query = request.app.mongodb['languages'].aggregate(query)
    results = [el["language_countries"] async for el in full_query][0]
    vk = []
    for i in results:
        vk.append(i["alpha-2_code"].upper())
    query = [
    {
        '$match': {
            'country_iso2': {"$in":vk}
        }
    }]
    full_query = request.app.mongodb['countries'].aggregate(query)
    results = [el async for el in full_query]
    return results


#--- insert one country
@router.post("/", response_description="Add new country")
async def create_country(request: Request, country: CountryBase = Body(...)):
    country = jsonable_encoder(country)
    # test si region_uid existe => okay
    if (region_uid := await request.app.mongodb["regions"].find_one({"region_uid":country["region_uid"]})) is not None:
        # test si country_uid not existe => okay
        if (country_uid := await request.app.mongodb["countries"].find_one({"country_uid":country["country_uid"]})) is None:
            new_country = await request.app.mongodb["countries"].insert_one(country)
            created_country = await request.app.mongodb["countries"].find_one({"_id": new_country.inserted_id})
            return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_country)    
        raise HTTPException(status_code=409, detail=f"Region with {country} already exists.")
    raise HTTPException(status_code=404, detail=f"Region for this with {country} doesn't exists.")

#--- list one country by region uid
@router.get("/region/{uid}", response_description="List a country by uid")
async def list_country_by_id (request: Request, uid: str):
    print (uid)
    if (country := await request.app.mongodb["countries"].find_one({"country_uid":uid})) is not None:
        return CountryDB(**country)
    raise HTTPException (status_code=404, detail=f"Country with uid {uid} not found.")  
    
#--- list all countries
@router.get("/", response_description="List all countries")
async def list_countries(request:Request, country_uid: Optional[str]=None)-> List[CountryDB]:
    query={}
    if country_uid:
        query["country_uid"] = country_uid
    full_query = request.app.mongodb["countries"].find(query).sort("country_uid",1)
    result = [CountryDB(**raw_country) async for raw_country in full_query]
    return result

#--- list one country by uid
@router.get("/{uid}", response_description="List a country by uid")
async def list_country_by_id (request: Request, uid: str):
    if (country := await request.app.mongodb["countries"].find_one({"country_uid":uid})) is not None:
        return CountryDB(**country)
    raise HTTPException (status_code=404, detail=f"Country with uid {uid} not found.")    

#--- update one country by uid
@router.patch("/{uid}", response_description="Update country by uid")
async def update_country_by_id(uid: str, request: Request, country: CountryUpdate = Body(...)):
    await request.app.mongodb['countries'].update_one(
        {"country_uid": uid}, {"$set": country.dict(exclude_unset=True)}
    )
    if (country := await request.app.mongodb['countries'].find_one({"country_uid": uid})) is not None:
        return CountryDB(**country)
    raise HTTPException(status_code=404, detail=f"Country with {uid} not found")    

#--- delete one country by uid
@router.delete("/{uid}", response_description="Delete a country by uid")
async def delete_country_by_id (request: Request, uid: str):
    delete_result = await request.app.mongodb["countries"].delete_one({"country_uid":uid})
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=None)
    raise HTTPException (status_code=404, detail=f"Country with uid {uid} not found.")    
