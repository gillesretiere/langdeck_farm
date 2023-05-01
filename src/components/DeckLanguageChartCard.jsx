import React from 'react'
import CircleChart from "../components/CircleChart";

const DeckLanguageChartCard = ({country}) => {
  let {country_name_fr, country_name_en, country_iso3, popularity, popularity_as_float, speakers , national_flag, xy_ccordinates} = country
  return (
    <>
    <div className="deck-language-chart-container">
        <div className="deck-language-chart-card">
          <div className="deck-language-chart-img-wrap">
            <img src={national_flag} alt="flag"></img>
          </div>          
          <div className="deck-language-chart-cty">{country_name_fr}</div>  
          <CircleChart data={popularity_as_float}></CircleChart>
        </div>   
    </div>        

    </>
  )
}

export default DeckLanguageChartCard