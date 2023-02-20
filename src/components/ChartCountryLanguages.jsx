import React from 'react'
import { Link } from "react-router-dom"
import RatioCircleComponent from "../components/RatioCircleComponent"
import Chart from "../components/Chart";
// <RatioCircleComponent popularity_as_float={popularity_as_float}></RatioCircleComponent>     
//{popularity_as_float>0 ? <div className="language-chart basis-1/3">{popularity}</div> : <div className="language-chart basis-1/3">?</div> }
/*
                <div className="basis-1/3 language-chart">
                     <div className="card-h2">{language_name_en}</div>
                     <div className="card-h2">{language_name_native}</div>
                </div>
*/
const ChartCountryLanguages = ({language}) => {

    let {language_uid, language_name_fr, language_name_en, language_name_native, popularity, popularity_as_float} = language
    console.log(language);

    return (
     
            <div className="container w-full h-screen flex-1 flex-col md:flex-row mb-1 p-1">

                <div className="basis-2/3 pl-2">
                     <div className="card-h2">{language_name_en}</div>
                     <div className="card-h3">{language_name_native}</div>                     
                     <hr/>
                     <div className="card-label">Code Alpha-3</div>
                     <div className="card-h3">{language_uid}</div>
                     <hr/>                     
                </div>
                <div className="language-chart basis-1/3">
                    
                <Link to={`/languages/${language_uid}`}> 
                    
                    <Chart data={popularity_as_float}></Chart>
                    </Link>          
                </div>


            </div>
    )
}

export default ChartCountryLanguages
