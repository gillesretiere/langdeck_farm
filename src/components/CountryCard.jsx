import { Link } from "react-router-dom"
import ChartCountryLanguages from "../components/ChartCountryLanguages"

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
    
    <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
        <div className="text-center h-24 c-card">{country_name_fr}</div>
        <div className="container w-full h-screen flex-1 flex-col md:flex-row">  
          <div className="split basis-1/2 pr-2">
            <Link to={`/countries/${country_uid}`}>
              <div className="c-card-img card-wrapper-country-flag flag pt-1"><img src={country_national_flag}></img></div>
            </Link>              
          </div>        
          <div className="split basis-1/2 pl-2">
            <div className="card-h1">{country_name_en}</div>
            <div className="card-h2">{country_name_native}</div>
            <hr/>
            <div className="card-label">Code Alpha-2</div>
            <div className="card-h3">{country_iso2}</div>
            <hr/>
            <div className="card-label">Code Alpha-3</div>
            <div className="card-h3">{country_uid}</div>   
            <hr/>
          </div>
        </div>
        <div className="w-full h-screen flex-1 flex-col md:flex-row">
          <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Duis at consectetur lorem donec. Posuere ac ut consequat semper viverra nam libero. Dui id ornare arcu odio ut sem nulla. Mauris commodo quis imperdiet massa tincidunt nunc. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Id nibh tortor id aliquet lectus proin. Enim nec dui nunc mattis enim ut tellus elementum. Imperdiet proin fermentum leo vel orci porta non pulvinar. Urna condimentum mattis pellentesque id nibh tortor id. Justo nec ultrices dui sapien eget mi proin sed. Condimentum vitae sapien pellentesque habitant morbi tristique. Id velit ut tortor pretium viverra suspendisse potenti nullam. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Mi quis hendrerit dolor magna eget est lorem. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Hendrerit dolor magna eget est. Sit amet tellus cras adipiscing.</p>    
        </div>  
    </div>

  )
}
export default CountryCard