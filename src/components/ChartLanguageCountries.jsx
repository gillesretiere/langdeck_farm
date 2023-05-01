import React from 'react'
import { Link } from "react-router-dom"
import RatioCircleComponent from "../components/RatioCircleComponent";
import Chart from "../components/Chart";
const ChartLanguageCountries = ({country}) => {
    let {country_name_fr, country_name_en, country_iso3, popularity, popularity_as_float, speakers , national_flag, xy_ccordinates} = country
    return (
     
        <div className="container w-full h-screen flex-1 flex-col md:flex-row mb-1 p-1">

            <div className="basis-1/3 pl-2">
                     <div className="flag-xs"><img src={national_flag} alt="flag"></img></div>                     
            </div>

            <div className="basis-1/3 pl-2">
                     <div className="card-h2">{country_name_fr}</div>
            </div>            
            <div className="language-chart basis-1/3">
                <Link to={`/countries/${country_iso3}`}> 
                    <Chart data={popularity_as_float}></Chart>
                </Link>          
            </div>    
        </div>       
)
}

export default ChartLanguageCountries