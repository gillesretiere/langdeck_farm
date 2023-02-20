import React from 'react'
import { Link } from "react-router-dom"
import CountryFactsCard from "../components/CountryFactsCard"
import CountryWFBPrimary from "../components/CountryWFBPrimary"
// <hr/>
// <div className="pl-2"><CountryFactsCard country={country}></CountryFactsCard></div> 
const CountryLanguagesCardHeader = ({country}) => {
    let {country_uid, region_uid, country_name_en, country_name_fr, country_name_native, country_iso2, country_national_flag, country_summary, country_region_fr, country_languages, country_facts, wfb_facts}  = country
    console.log(country)
    return (
        <>
            <div className="bg-white">
                <div className="card-wrapper-row">  
                    <div className="card-wrapper-column-left">   
                        <div className="p-2 card-header card-header-c">{country_name_fr}</div>
                        <div className="container w-full h-screen flex-1 flex-col md:flex-row">  
                            <div className="split basis-1/2 pr-2">
                                <Link to={`/languages/country/${country_uid}`}>
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
                                <p>&nbsp;</p>                            
                            </div>
                        </div>
                        <div className="pl-2 card-label-xl">Facts</div>
                        <hr/>   
                        <div className="pl-2"><CountryWFBPrimary wfb_facts={wfb_facts}></CountryWFBPrimary></div>                    
                    </div>  
                </div>  
            </div>  
        </>        
    )
}
export default CountryLanguagesCardHeader