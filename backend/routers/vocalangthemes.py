from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import VocabulariesLanguageThemeDB

router = APIRouter()

#--- list all themes (domain is MEDICAL only at the moment !!!)
@router.get("/", response_description="List all themes available ")
async def list_available_themes(request:Request, theme_uid: Optional[str]=None)-> List[VocabulariesLanguageThemeDB]:
    query={}
    if theme_uid:
        query["theme_uid"] = theme_uid
    full_query = request.app.mongodb["vocabularies"].find(query).sort("theme_uid",1)
    result = [VocabulariesLanguageThemeDB(**raw_theme) async for raw_theme in full_query]
    return result

#--- list one theme by uid
@router.get("/{uid}", response_description="List all themes by language uid")
async def list_themes_by_language_id (request: Request, uid: str):
    if (language_uid := await request.app.mongodb["vocabularies"].find_one({"language_uid":uid})) is not None:
        return VocabulariesLanguageThemeDB(**language_uid)
    raise HTTPException (status_code=404, detail=f"Language with uid {uid} not found.") 

