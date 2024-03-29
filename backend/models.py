from bson import ObjectId
from pydantic import Field, BaseModel
from typing import Optional, List, Dict, Any

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class MongoBaseModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        json_encoders = {ObjectId: str}

# Regions
class RegionBase(MongoBaseModel):
    region_uid: str = Field(..., min_length=3, max_length=3)
    region_alpha2: str = Field(..., min_length=2)
    region_name: str = Field(..., min_length=3)
    region_name_fr: str = Field(...,  min_length=3)
    region_picture: str = Field(...,  min_length=3)    

class RegionUpdate(MongoBaseModel):
    region_alpha2: str = Field(..., min_length=2)
    region_name: Optional[str] = Field(..., min_length=3)
    region_name_fr: Optional[str] = Field(...,  min_length=3)
    region_picture: Optional[str] = Field(...,  min_length=3)    
    
class RegionDB(RegionBase):
    pass

class CountryByLanguages (MongoBaseModel):
    language_uid: Optional[str] = Field(..., min_length=3)
    language_name_fr: Optional[str] = Field(...)
    popularity : Optional[str] = Field(...)
    popularity_as_float : Optional[float] = Field(...)
    speakers :Optional[int]
    is_official : Optional[str] = Field(...)
    language_name_fr: Optional[str] = Field(...)

# Countries
class CountryBase(MongoBaseModel):
    country_uid: str = Field(..., min_length=3, max_length=3)
    country_iso2: str = Field(..., min_length=2, max_length=2)
    country_iso3: str = Field(..., min_length=3, max_length=3)
    country_name_en: str = Field(...)
    country_name_fr: str = Field(...)
    country_name_native: str = Field(...)
    country_national_flag: str = Field(...,  min_length=3)
    region_uid: str = Field(...,  min_length=3)
    country_region_fr: str = Field(..., min_length=3)
    country_openstreetmap_xy: str = Field(...)
    country_xy: str = Field(...)
    country_summary: str = Field(...)
    country_languages_summary: str = Field(...)
    country_languages : Any
    country_facts : Any
    wfb_facts : Any
    country_mapicon : str = Field(...)

class CountryUpdate(MongoBaseModel):
    country_uid: Optional[str] = Field(..., min_length=3, max_length=3)
    country_iso2: Optional[str] = Field(..., min_length=2, max_length=2)
    country_iso3: Optional[str] = Field(..., min_length=3, max_length=3)
    country_name_en: Optional[str] = Field(...)
    country_name_fr: Optional[str] = Field(...)
    country_name_native: Optional[str] = Field(...)
    country_national_flag: Optional[str] = Field(...,  min_length=3)
    region_uid: Optional[str] = Field(...,  min_length=3)
    country_region_fr: Optional[str] = Field(..., min_length=3)
    country_openstreetmap_xy: Optional[str] = Field(...)
    country_xy: Optional[str] = Field(...)
    country_summary: Optional[str] = Field(...)
    country_languages_summary: Optional[str] = Field(...)    
    country_languages : Optional [Any]
    country_desc : Optional[str] = Field(...)

class CountryDB(CountryBase):
    pass

# Languages
class LanguageBase(MongoBaseModel):
    language_uid: str = Field(..., min_length=3, max_length=3)
    language_iso2: str = Field(..., min_length=2, max_length=2)
    language_iso2_google: Optional[str] = Field(..., min_length=2, max_length=5)
    language_name_en: str = Field(..., min_length=3)
    language_name_fr: str = Field(...,  min_length=3)
    language_name_native: str = Field(..., min_length=3)
    language_wals_code: str = Field(...,  min_length=3)
    language_desc: Optional[str] = Field(...)
    language_countries : Any

class LanguageUpdate(MongoBaseModel):
    language_uid: Optional[str] = Field(..., min_length=3, max_length=3)
    language_iso2: Optional[str] = Field(..., min_length=2, max_length=2)
    language_iso2_google: Optional[str] = Field(..., min_length=2, max_length=5)
    language_name_en: Optional[str] = Field(..., min_length=3)
    language_name_fr: Optional[str] = Field(...,  min_length=3)
    language_name_native: Optional[str] = Field(..., min_length=3)
    language_wals_code: Optional[str] = Field(...,  min_length=3)
    language_desc: Optional[str] = Field(...)
    language_countries : Optional[Any]

class LanguageDB(LanguageBase):
    pass

# languages available for translation
class TranslatorBase(MongoBaseModel):
    language_uid: str = Field(..., min_length=3, max_length=3)
    language_iso2: str = Field(..., min_length=2, max_length=2)
    language_iso2_google: Optional[str] = Field(..., min_length=2, max_length=5)
    language_wals_code: str = Field(...,  min_length=3)
    language_name_en: str = Field(..., min_length=3)
    language_name_fr: str = Field(...,  min_length=3)
    language_name_native: str = Field(..., min_length=3)
    country_ref: str = Field(..., min_length=2, max_length=2)
    flag_icon: str = Field(...,  min_length=3)

class TranslatorDB(TranslatorBase):
    pass

# languages available for translation
class TranslatorLanguageBase(MongoBaseModel):
    language_uid: str = Field(..., min_length=3, max_length=3)
    language_iso2: str = Field(..., min_length=2, max_length=2)
    language_iso2_google: Optional[str] = Field(..., min_length=2, max_length=5)
    language_wals_code: str = Field(...,  min_length=3)
    language_name_en: str = Field(..., min_length=3)
    language_name_fr: str = Field(...,  min_length=3)
    language_name_native: str = Field(..., min_length=3)

class TranslatorLanguageDB(TranslatorLanguageBase):
    pass

# languages available for vocabularies (themes)
class VocabulariesLanguageTheme(MongoBaseModel):
    language_uid: str = Field(..., min_length=3, max_length=3)
    themes : Optional[Any]

class VocabulariesLanguageThemeDB(VocabulariesLanguageTheme):
    pass

# stories
class Stories(MongoBaseModel):
    language: str = Field(..., min_length=3, max_length=3)
    domains : Optional[Any]

class StoriesDB(Stories):
    pass
# glossaries
