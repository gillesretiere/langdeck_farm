from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import RegionBase, RegionDB, RegionUpdate

router = APIRouter()

#--- list all regions
@router.get("/", response_description="List all regions")
async def list_regions(request:Request, region_uid: Optional[str]=None)-> List[RegionDB]:
    query={}
    if region_uid:
        query["region_uid"] = region_uid
    full_query = request.app.mongodb["regions"].find(query).sort("region_uid",1)
    result = [RegionDB(**raw_region) async for raw_region in full_query]
    return result

#--- list one region by uid
@router.get("/{uid}", response_description="List a region by uid")
async def list_region_by_id (request: Request, uid: str):
    if (region := await request.app.mongodb["regions"].find_one({"region_uid":uid})) is not None:
        return RegionDB(**region)
    raise HTTPException (status_code=404, detail=f"Region with uid {uid} not found.")

#--- delete one region by uid
@router.delete("/{uid}", response_description="Delete a region by uid")
async def delete_region_by_id (request: Request, uid: str):
    delete_result = await request.app.mongodb["regions"].delete_one({"region_uid":uid})
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=None)
    raise HTTPException (status_code=404, detail=f"Region with uid {uid} not found.")

#--- update one region by uid
@router.patch("/{uid}", response_description="Update region by uid")
async def update_region_by_id(uid: str, request: Request, region: RegionUpdate = Body(...)):
    await request.app.mongodb['regions'].update_one(
        {"region_uid": uid}, {"$set": region.dict(exclude_unset=True)}
    )
    if (region := await request.app.mongodb['regions'].find_one({"region_uid": uid})) is not None:
        return RegionDB(**region)
    raise HTTPException(status_code=404, detail=f"Region with {uid} not found")

#--- insert one region
@router.post("/", response_description="Add new region")
async def create_region(request: Request, region: RegionBase = Body(...)):
    region = jsonable_encoder(region)
    if (region_uid := await request.app.mongodb["regions"].find_one({"region_uid":region["region_uid"]})) is None:
        new_region = await request.app.mongodb["regions"].insert_one(region)
        created_region = await request.app.mongodb["regions"].find_one({"_id": new_region.inserted_id})
        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_region)    
    raise HTTPException(status_code=409, detail=f"Region with {region} already exists.")

# optional
@router.get("/region_name_fr/{region_name_fr}", response_description="Get region_name overview")
async def region_name(region_name_fr: str, request: Request):

    query = [
        {"$match": {"region_name_fr": region_name_fr}},
        {"$sort": {"region_name": 1}},
    ]

    full_query = request.app.mongodb["regions"].aggregate(query)

    results = [el async for el in full_query]

    return results    
    