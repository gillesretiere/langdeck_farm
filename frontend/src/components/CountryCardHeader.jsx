import React from 'react'
import { Link } from "react-router-dom"

const CountryCardHeader = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country
    return (
        <>
            <div className="text-center h-24 c-card">{country_name_fr}</div>
            <div className="container w-full h-screen flex-1 flex-col md:flex-row">  
                <div className="split basis-1/2 pr-2">
                    <Link to={`/countries/${country_uid}`}>
                    <div className="c-card-img card-wrapper-country-flag flag pt-1"><img src={country_national_flag}></img></div>
                    </Link>              
                </div>        
                <div className="split basis-1/2 pl-2">
                    <div className="card-h1">{country_name_en}</div>
                    <div className="card-h2">{country_name_native}</div>
                    <hr/>
                    <div className="card-label">Code Alpha-2</div>
                    <div className="card-h3">{country_iso2}</div>
                    <hr/>
                    <div className="card-label">Code Alpha-3</div>
                    <div className="card-h3">{country_uid}</div>   
                </div>
            </div>
        </>        
    )
}

export default CountryCardHeader