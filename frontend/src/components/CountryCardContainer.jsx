import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import CountryCardSummary from "../components/CountryCardSummary"
import CountryCardMap from "../components/CountryCardMap"

let BASE_URL = "http://141.94.204.108:8000/countries"

const CountryCardContainer = ({country, setUpdatedCountry}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country
    const [uid, setUid] = useState({country_uid})

  return (
    <div>
        <h1>CountryCardContainer</h1>
        <h2>{country_name_fr}</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <div  className="country-map-card"><CountryCardSummary country={country}></CountryCardSummary></div>
            <CountryCardMap></CountryCardMap>
        </div>
    </div>

  )
}

export default CountryCardContainer