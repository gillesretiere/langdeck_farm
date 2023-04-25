from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import StoriesDB

router = APIRouter()

#--- list all stories)
@router.get("/", response_description="List all stories ")
async def list_available_stories(request:Request, story_uid: Optional[str]=None)-> List[StoriesDB]:
    query={}
    if story_uid:
        query["story_uid"] = story_uid
    full_query = request.app.mongodb["stories"].find(query).sort("story_uid",1)
    result = [StoriesDB(**raw_rec) async for raw_rec in full_query]
    return result

#--- list one story by uid
@router.get("/{uid}", response_description="List a story by language uid")
async def list_stories_by_language_id (request: Request, uid: str):
    if (language := await request.app.mongodb["stories"].find_one({"language":uid})) is not None:
        return StoriesDB(**language)
    raise HTTPException (status_code=404, detail=f"story_uid with uid {uid} not found.") 

