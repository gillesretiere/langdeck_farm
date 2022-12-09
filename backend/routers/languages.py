from typing import Tuple, List, Optional
from fastapi import APIRouter, Body, Request, status, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from models import LanguageBase, LanguageDB, LanguageUpdate

router = APIRouter()

#--- list all languages
@router.get("/", response_description="List all languages")
async def list_languages(request:Request, language_uid: Optional[str]=None)-> List[LanguageDB]:
    query={}
    if language_uid:
        query[language_uid] = language_uid
    full_query = request.app.mongodb["languages"].find(query).sort("language_uid",1)
    result = [LanguageDB(**raw_language) async for raw_language in full_query]
    return result

#--- list one language by uid
@router.get("/{uid}", response_description="List a language by uid")
async def list_language_by_id (request: Request, uid: str):
    if (language := await request.app.mongodb["languages"].find_one({"language_uid":uid})) is not None:
        return LanguageDB(**language)
    raise HTTPException (status_code=404, detail=f"language with uid {uid} not found.")

#--- delete one language by uid
@router.delete("/{uid}", response_description="Delete a language by uid")
async def delete_language_by_id (request: Request, uid: str):
    delete_result = await request.app.mongodb["languages"].delete_one({"language_uid":uid})
    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_204_NO_CONTENT, content=None)
    raise HTTPException (status_code=404, detail=f"language with uid {uid} not found.")

#--- update one language by uid
@router.patch("/{uid}", response_description="Update language by uid")
async def update_language_by_id(uid: str, request: Request, language: LanguageUpdate = Body(...)):
    await request.app.mongodb['languages'].update_one(
        {"language_uid": uid}, {"$set": language.dict(exclude_unset=True)}
    )
    if (language := await request.app.mongodb['languages'].find_one({"language_uid": uid})) is not None:
        return LanguageDB(**language)
    raise HTTPException(status_code=404, detail=f"language with {uid} not found")

#--- insert one language
@router.post("/", response_description="Add new language")
async def create_language(request: Request, language: LanguageBase = Body(...)):
    language = jsonable_encoder(language)
    if (language_uid := await request.app.mongodb["languages"].find_one({"language_uid":language["language_uid"]})) is None:
        new_language = await request.app.mongodb["languages"].insert_one(language)
        created_language = await request.app.mongodb["languages"].find_one({"_id": new_language.inserted_id})
        return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_language)    
    raise HTTPException(status_code=409, detail=f"language with {language} already exists.")
    