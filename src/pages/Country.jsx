import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import CountryMapComponent from "../components/CountryMapComponent"
import CountryLanguagesCardHeader from "../components/CountryLanguagesCardHeader"
import CountryCardLanguageChart from "../components/CountryCardLanguageChart"

let BASE_URL = "http://141.94.204.108:8000/countries"

const Country = () => {
  let {id} = useParams()

  const [country, setCountry] = useState([])
  const [CountryName, setCountryName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 
  const [uid, setUid] = useState({id})

  const setUpdatedCountry = (updatedCountry) => {
    let BASE_URL = "http://141.94.204.108:8000/countries/alpha2";
    setUid (updatedCountry);
    id = updatedCountry;
    console.log(updatedCountry);
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setCountry(json)
            setIsPending(false)
        }) 
  }

  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setCountry(json)
            setIsPending(false)
        })          
  },[CountryName, page]) 

  return (
    <Layout>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-2 gap-3">
        <div className="card-item"><CountryMapComponent country={country} setUpdatedCountry={setUpdatedCountry}></CountryMapComponent></div>
        <div className="card-item"><CountryLanguagesCardHeader country={country} setUpdatedCountry={setUpdatedCountry}></CountryLanguagesCardHeader></div>
        <div className="card-item"><CountryCardLanguageChart country={country} setUpdatedCountry={setUpdatedCountry}></CountryCardLanguageChart></div>
      </div>
    </Layout>  
  )
}

export default Country