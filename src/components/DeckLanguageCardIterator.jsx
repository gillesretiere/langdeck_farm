import React from 'react'
import DeckLanguageChartCard from "../components/DeckLanguageChartCard";

const DeckLanguageCardIterator = ({language}) => {
    let {language_uid, language_iso2, language_name_en, language_name_fr, language_name_native, language_wals_code, language_countries} = language   
    return (
        <>
        <div className="deck-language-chart-container">
            {language_countries && language_countries.sort((a, b) => a.popularity_as_float > b.popularity_as_float?-1:1).map(
            (el)=>{
                return (                  
                    <DeckLanguageChartCard country = {el}></DeckLanguageChartCard>                          
            )
            }
            )}    
        </div>
        </>
    )
}

export default DeckLanguageCardIterator