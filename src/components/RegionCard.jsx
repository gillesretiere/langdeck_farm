import { Link } from "react-router-dom"
const RegionCard = ({region}) => {
    let {region_uid, region_name, region_name_fr, region_alpha2, region_picture} = region   
      
    return (
    <Link to={`/languages?language_iso2=${region_alpha2}`}>
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg transition ease-in-out hover:scale-105 duration-300">
        <div className="text-center h-24 r-card">{region_name}</div>
        <div>Region (en): {region_name}</div>
        <div>Region (fr): <span className="font-semibold text-blue-600">{region_name_fr}</span></div>
        <div>Code Alpha-2: {region_alpha2}</div>
        <div><img className="r-card" src={region_picture}></img></div>
    </div>
    </Link>
  )
}
export default RegionCard