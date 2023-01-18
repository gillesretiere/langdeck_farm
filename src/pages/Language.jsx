import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import CountryMapComponent from "../components/CountryMapComponent"
import CountryCardSummary from "../components/CountryCardSummary"

let BASE_URL = "http://141.94.204.108:8000/languages"

const Language = () => {
  let {id} = useParams()

  const [language, setLanguage] = useState([])

  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setLanguage(json)
        })          
  },[]) 

  return (
    <Layout>
    <div>
      <div className="container w-full h-screen flex flex-col md:flex-row">
        <div className="split basis-2/3">Map</div>
        <div className="split basis-1/3">{language.language_name_en}<br/>{language.language_desc}</div>
      </div>
    </div>
    </Layout>
  )
}

export default Language