import React from 'react'
import { Link } from "react-router-dom"
import ChartCountryLanguages from "../components/ChartCountryLanguages"

const CountryCardLanguageChart = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country
    return (
        <>
            
            <div className="card-wrapper-row">  
                <div className="card-wrapper-column-left">
                
                    {country_languages && country_languages.sort((a, b) => a.popularity_as_float > b.popularity_as_float?-1:1).map(
                    (el)=>{
                        return (                  
                           <ChartCountryLanguages key={el.language_uid} language = {el} ></ChartCountryLanguages>                             
                    )
                    }
                    )}    
                </div>
            </div>
            <Link to={`/regionCountries/${region_uid}`}>  
            <div className="card-wrapper-row"> 
              <div className="text-xs">Back to all countries</div>
            </div>
            </Link>                       
        </>
    )
}

export default CountryCardLanguageChart