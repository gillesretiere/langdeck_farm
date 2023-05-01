import { Link } from "react-router-dom"
import LanguageCountriesChartCard from "../components/LanguageCountriesChartCard"
import GeoDataCard from "../components/GeoDataCard"
    
const LanguageCard = ({language}) => {
    let {language_uid, language_iso2, language_name_en, language_name_fr, language_name_native, language_wals_code, language_countries} = language   
   

    return (
    // <Link to={`/languages/${language_uid}`}>
    <Link to={`/languages/${language_uid}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300 card">
      <div className="text-center h-24 l-card">{language_name_fr}</div>
        <div className="card-wrapper">
          <div className="card-wrapper-row">
            <div className="card-wrapper-column-left">
              <div className="wrtx">
                <div>Langue (en):</div>
                <div className="font-bold">{language_name_en}</div>
                <div>Langue (native):</div>
                <div className="font-bold">{language_name_native}</div>
                <div>Alpha-2:</div>
                <div className="font-bold">{language_iso2}</div>         
                <div>Alpha-3:</div>
                <div className="font-bold">{language_uid}</div>                                 
                <div>WALS:</div>
                <div className="font-bold">{language_wals_code}</div>               
              </div>
            </div>
            <div className="card-wrapper-column-right bg-light-orange">
             {/*<GeoDataCard key={language_uid} language={language}>GeoDataCard Map</GeoDataCard>*/}

            </div>            
          </div>
          <Link to={`/countries/language/${language_uid}`}>
          <div className="container grid grid-cols-5 auto-rows-3fr bg-light-green">
                  {language_countries && language_countries.sort((a, b) => a.popularity_as_float > b.popularity_as_float?-1:1).map(
                    (el)=>{
                      return (                  
                        <LanguageCountriesChartCard key={el.country_iso3} country = {el} />                                 
                    )
                    }
                  )}      
          </div>
          </Link>
        </div>
    </div>
    </Link>
  )
}
export default LanguageCard