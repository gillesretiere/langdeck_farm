import { Link } from "react-router-dom"
import ChartCountryLanguages from "../components/ChartCountryLanguages"
import CountryMapChart from "../components/CountryMapChart"

/*https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b*/
require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
 }
const AllImages = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const CountryCard = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages} = country   
      
    return (
    // <Link to={`/languages/country/${country_uid}`}>
    
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300 card">
        <div className="text-center h-24 c-card">{country_name_fr}</div>
          <div className="card-wrapper">
            <div className="card-wrapper-row">
              <div className="card-wrapper-column-left">
                <div className="c-card-img card-wrapper-country-flag flag"><img src={country_national_flag}></img></div>
                  <div className="wrtx text-base">
                    <div className="text-xs">Country (en):</div>
                    <div className="font-bold">{country_name_en}</div>
                    <div className="text-xs">Country (native):</div>
                    <div className="font-bold">{country_name_native}</div>
                    <div className="text-xs">Alpha-2:</div>
                    <div className="font-bold">{country_iso2}</div>                                        
                  </div>
              </div>
            
              <div className="card-wrapper-column-right bg-light-green">{country_uid}

                
                <Link to={`/countries/${country_uid}`}>
                <div className="card-wrapper-country-mappos">
                  <div className="c-card-img card-wrapper-country-mappos-world">
                    
                    {/*<img src="https://res.cloudinary.com/dhc7ovnwk/image/upload/v1671982019/81928-and-map-globe-black-world-white-1240_o3i84d.png" className="huerotate"></img>*/}
                  </div>
                  <div className="c-card-img card-wrapper-country-mappos-region">
                    <img src={AllImages[`${region_uid+".png"}`]} className="huerotate"></img>
                  </div>                               
                </div>   
                </Link>               
              </div>                
            </div>

            <Link to={`/languages/country/${country_uid}`}>
            <div className="card-wrapper-row">  
              <div className="card-wrapper-column-left">
              
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
        </div>
    </div>

  )
}
export default CountryCard