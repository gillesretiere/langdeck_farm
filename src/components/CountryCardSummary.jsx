import React from 'react'
import { Link } from "react-router-dom"
import CountryCardLanguageChart from "../components/CountryCardLanguageChart"
import CountryCardHeader from "../components/CountryCardHeader"

const CountryCardSummary = ({country, setUpdatedCountry}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country
   
  return (
    <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
      <CountryCardHeader country={country}></CountryCardHeader>
      <CountryCardLanguageChart country={country}></CountryCardLanguageChart>
    </div>

  )
}

export default CountryCardSummary