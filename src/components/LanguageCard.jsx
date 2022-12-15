import { Link } from "react-router-dom"
const LanguageCard = ({language}) => {
    let {language_uid, language_name_en, language_name_fr, language_name_native, language_wals_code} = language   
      
    return (
    <Link to={`/languages/${language_uid}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300">
        <div className="text-center h-24 l-card">{language_name_fr}</div>
        <div>Langue (en): {language_name_en}</div>
        <div>Langue (fr): <span className="font-semibold text-blue-600">{language_name_fr}</span></div>
        <div>Langue (native): {language_name_native}</div>
        <div>WALS: {language_wals_code}</div>        
    </div>
    </Link>
  )
}
export default LanguageCard