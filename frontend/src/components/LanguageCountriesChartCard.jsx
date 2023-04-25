import React from 'react'

const LanguageCountriesChartCard = ({country}) => {

    let {country_name_fr, country_iso2, popularity, popularity_as_float, speakers , national_flag, xy_ccordinates} = country
    return (
    <div className="item">
        <div className="language-item flag-xs"><img src={national_flag} alt="flag"></img></div>
        <div className="language-item">{country_iso2}</div>
        <div className="language-item">{popularity}</div>
        <div className="language-item">
            <div className="centered-circle centered-circle-lang" style={popularity_as_float>0 ? 
                {width:`${popularity_as_float*4.5}vw`, height:`${popularity_as_float*4.5}vw`} : 
                {width: `0.1vw`, height: `0.1vw`} }>&nbsp;
            </div>        
        </div>

    </div>
    )
}
export default LanguageCountriesChartCard