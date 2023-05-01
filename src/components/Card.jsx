import { Link } from "react-router-dom"
const Card = ({language}) => {
    let {language_uid, language_name_en, language_name_fr, language_name_native, language_wals_code} = language   
      
    return (
    <Link to={`/languages/${language_uid}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300 font-mono">
        <div className="font-bold text-center text-lg text-FarmNavy"><span className="text-FarmLime">{language_name_en}</span> {language_uid}</div>
        <div>Langue (en): {language_name_en}</div>
        <div>Langue (fr): <span className="font-semibold text-orange-600">{language_name_fr}</span></div>
        <div>Langue (native): {language_name_native}</div>
        <div>WALS: {language_wals_code}</div>        
    </div>
    </Link>
  )
}
export default Card