import React from 'react'
import { Link } from "react-router-dom"
import RatioCircleComponent from "../components/RatioCircleComponent"

const ChartCountryLanguages = ({language}) => {

    let {language_uid, language_name_fr, popularity, popularity_as_float} = language

    return (
     
            <div className="container w-full h-screen flex-1 flex-col md:flex-row mb-1 p-1">

                <div className="basis-1/3 language-chart">{language_name_fr}</div>
                <div className="language-chart basis-1/3">
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/languages/${language_uid}`}> 
                    <RatioCircleComponent popularity_as_float={popularity_as_float}></RatioCircleComponent>     
                    </Link>          
                </div>
                {popularity_as_float>0 ? <div className="language-chart basis-1/3">{popularity}</div> : <div className="language-chart basis-1/3">?</div> }

            </div>
    )
}

export default ChartCountryLanguages
