import React from 'react'
import { Link } from "react-router-dom"
import RatioCircleComponent from "../components/RatioCircleComponent";

const ChartLanguageCountries = ({country}) => {
    let {country_name_fr, country_iso3, popularity, popularity_as_float, speakers , national_flag, xy_ccordinates} = country
    return (
     
        <div className="container w-full h-screen flex-1 flex-col md:flex-row mb-1 p-1">
            
            <div className="basis-1/4 language-chart language-item flag-xs"><Link to={`/countries/${country_iso3}`}><img src={national_flag} alt="flag"></img> </Link></div>
           
            <div className="basis-1/4 language-chart font-bold">{country_name_fr}</div>
            <div className="language-chart basis-1/4">
                <Link to={`/countries/${country_iso3}`}><RatioCircleComponent popularity_as_float={popularity_as_float}></RatioCircleComponent> </Link>    
            </div>
            {popularity_as_float>0 ? <div className="language-chart basis-1/4">{popularity}</div> : <div className="language-chart basis-1/4">?</div> }

        </div>
)
}

export default ChartLanguageCountries