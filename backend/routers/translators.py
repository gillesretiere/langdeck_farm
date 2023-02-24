from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import TranslatorLanguageBase, TranslatorLanguageDB

router = APIRouter()

#--- list all regions
@router.get("/", response_description="List all languages available for translation")
async def list_available_languages(request:Request, language_uid: Optional[str]=None)-> List[TranslatorLanguageDB]:
    query={}
    if language_uid:
        query["language_uid"] = language_uid
    full_query = request.app.mongodb["translator_languages"].find(query).sort("language_uid",1)
    result = [TranslatorLanguageDB(**raw_language) async for raw_language in full_query]
    return result
