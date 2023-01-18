import React from 'react'
import {useState, useEffect} from 'react'

let BASE_URL = "http://141.94.204.108:8000/countries"

const CountryCardMinimal = ({country_uid}) => {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        fetch(`${BASE_URL}/${country_uid}`)
        .then(response=>response.json())
        .then(json=>{
            setCountry(json);
        }) 
    },[]) 

  return (
    <div className="shadow-lg p-5 flex flex-col bg-FarmWhite rounded-lg card">
        <div id="country-name-fr" className="text-center h-24 c-card">{country.country_name_fr}</div>
        <div className="card-wrapper">
            <div className="card-wrapper-row">
                <div className="font-normal">{country.country_languages_summary}</div>
            </div>
        </div>
    </div>
  )
}

export default CountryCardMinimal