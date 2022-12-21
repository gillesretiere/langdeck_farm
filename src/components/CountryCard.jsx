import { Link } from "react-router-dom"
const CountryCard = ({country}) => {
    let {country_uid, country_name_en, country_name_fr, country_iso2, country_national_flag, country_languages} = country   
      
    return (
    // <Link to={`/languages/country/${country_uid}`}>
    <Link to={`/languages/country/${country_uid}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300">
        <div className="text-center h-24 c-card">{country_name_fr}</div>
        <div>Country (en): {country_name_en}</div>
        <div>Country (fr): <span className="font-semibold text-blue-600">{country_name_fr}</span></div>
        <div>Code Alpha-2: {country_iso2}</div>
        <div className="c-card-img"><img src={country_national_flag}></img></div>
    </div>
    </Link>
  )
}
export default CountryCard