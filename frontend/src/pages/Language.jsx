import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import LanguageMapComponent from "../components/LanguageMapComponent"
import LanguageCardSummary from "../components/LanguageCardSummary"
import LanguageCardCountries from "../components/LanguageCardCountries"

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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-2 gap-3">
        <div className="card-item"><LanguageMapComponent language={language}></LanguageMapComponent></div>
        <div className="card-item"><LanguageCardCountries language={language}></LanguageCardCountries></div>
        <div className="card-item"><LanguageCardSummary language={language}></LanguageCardSummary></div>
      </div>
    </Layout>
  )
}

export default Language