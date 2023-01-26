import React from 'react'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import CountryMapComponent from "../components/CountryMapComponent"
import CountryCardSummary from "../components/CountryCardSummary"

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
      <div className="container w-full h-screen flex flex-col md:flex-row">
        <div className="basis-1/2 m-8"><CountryMapComponent country={country} setUpdatedCountry={setUpdatedCountry}></CountryMapComponent></div>
        <div className="basis-1/4 m-8"><CountryCardSummary country={country} setUpdatedCountry={setUpdatedCountry}></CountryCardSummary></div>
        <div className="basis-1/4 m-8"><CountryCardSummary country={country} setUpdatedCountry={setUpdatedCountry}></CountryCardSummary></div>
      </div>
    </Layout>
  )
}

export default Country