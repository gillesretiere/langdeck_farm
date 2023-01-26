import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import LanguageMapComponent from "../components/LanguageMapComponent"
import LanguageCardSummary from "../components/LanguageCardSummary"

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
      <div className="container w-full h-screen flex flex-col md:flex-row">
        <div className="basis-1/2 m-8"><LanguageMapComponent language={language}></LanguageMapComponent></div>
        <div className="basis-1/4 m-8"><LanguageCardSummary language={language}></LanguageCardSummary></div>
        <div className="basis-1/4 m-8"><LanguageCardSummary language={language}></LanguageCardSummary></div>
      </div>
    </Layout>
  )
}

export default Language