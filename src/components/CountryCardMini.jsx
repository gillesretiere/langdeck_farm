import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import ChartCountryLanguages from "../components/ChartCountryLanguages"

/*https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b*/
require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
const AllImages = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
console.log(AllImages)

const CountryCardMini = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country   

    return (
    // <Link to={`/languages/country/${country_uid}`}>
    
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg">
        <div id="country-name-fr" className="text-center h-24 c-card">{country_name_fr}</div>
          <div className="card-wrapper">
            <div className="card-wrapper-row">
              <div className="card-wrapper-column-left">
                <div className="c-card-img card-wrapper-country-flag flag"><img id="country-flag" src={country_national_flag}></img></div>
                  <div className="wrtx text-base">
                    <div className="text-xs">Country (en):</div>
                    <div id="country-name-en" className="font-bold">{country_name_en}</div>
                    <div className="text-xs">Country (native):</div>
                    <div id="country-name-native" className="font-bold">{country_name_native}</div>
                    <div className="text-xs">Alpha-2:</div>
                    <div id="country-name-iso" className="font-bold">{country_iso2}</div>                                        
                  </div>
              </div>
            </div>
            <Link to={`/languages/country/${country_uid}`}>
            <div className="card-wrapper-row">  
              <div id="country-languages-list" className="card-wrapper-column-left">
              
                  {country_languages && country_languages.sort((a, b) => a.popularity_as_float > b.popularity_as_float?-1:1).map(
                    (el)=>{
                      return (                  
                        <ChartCountryLanguages key={el.language_uid} language = {el} />                                 
                    )
                    }
                  )}    
              </div>
            </div>
            </Link>
            <Link to={`/regionCountries/${region_uid}`}>  
            <div className="card-wrapper-row"> 
              <div className="text-xs">Back to all countries</div>
            </div>
            </Link>     
        </div>
    </div>

  )
}
export default CountryCardMini