import React from 'react'
import LanguageCountriesChartCard from "../components/LanguageCountriesChartCard";
import ChartLanguageCountries from "../components/ChartLanguageCountries";

const LanguageCardSummaryChart = ({language}) => {
    let {language_uid, language_iso2, language_name_en, language_name_fr, language_name_native, language_wals_code, language_countries} = language   
    return (
        <>
        <div className="bg-white">
            <div className="card-wrapper-row">  
                <div className="card-wrapper-column-left">
                    <div className="p-2 card-header card-header-c">Countries for : {language_name_en}</div>
                
                    {language_countries && language_countries.sort((a, b) => a.popularity_as_float > b.popularity_as_float?-1:1).map(
                    (el)=>{
                        return (                  
                            <ChartLanguageCountries key={el.country_iso3} country = {el}></ChartLanguageCountries>                          
                    )
                    }
                    )}    
                </div>
            </div>
        </div>        
        </>
    )
}

export default LanguageCardSummaryChart