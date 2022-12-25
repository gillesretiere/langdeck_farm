import { Link } from "react-router-dom"
import ChartCountryLanguages from "../components/ChartCountryLanguages"

const CountryCard = ({country}) => {
    let {country_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country   
      
    return (
    // <Link to={`/languages/country/${country_uid}`}>
    <Link to={`/languages/country/${country_uid}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300 card">
        <div className="text-center h-24 c-card">{country_name_fr}</div>
          <div className="card-wrapper-country">
            <div className="card-wrapper-country-row">
              <div className="card-wrapper-country-column-left">
                <div className="c-card-img card-wrapper-country-flag"><img src={country_national_flag}></img></div>
                <div>Country (en): {country_name_en}</div>
                <div>Country (native): <span className="font-semibold text-blue-600">{country_name_native}</span></div>
                <div>Code Alpha-2: {country_iso2}</div>         
                <div>{country_summary}</div>       
              </div>
              <div className="card-wrapper-country-column-right bg-light-green">
                <div className="card-wrapper-country-mappos">
                  <h1>Situation géographique</h1>
                  <div className="c-card-img card-wrapper-country-mappos-world">
                    <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1671982019/81928-and-map-globe-black-world-white-1240_o3i84d.png" className="huerotate"></img>
                  </div>
                  <div className="c-card-img card-wrapper-country-mappos-region"><p>{country_region_fr}</p>
                    <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1671997599/asia-silhouette_zw1swb.png" className="huerotate"></img>
                  </div>                  
                  <div className="c-card-img card-wrapper-country-mappos-local">
                    <img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1671978153/langdeck/assets/images/afghanistan-silhouette.png" className="huerotate"></img>
                  </div> 
                </div>                  
              </div>                
            </div>
            <div className="card-wrapper-country-row">  
              <div className="card-wrapper-country-column-left">
                  {country_languages && country_languages.map(
                    (el)=>{
                      return (                  
                        <ChartCountryLanguages key={el.language_uid} language = {el} />                                 
                    )
                    }
                  )}                
              </div>
            </div>
        </div>
    </div>
    </Link>
  )
}
export default CountryCard