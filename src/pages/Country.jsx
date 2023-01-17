import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CountryMapComponent from "../components/CountryMapComponent"
import CountryCardMini from "../components/CountryCardMini"
import CountryCardSummary from "../components/CountryCardSummary"
import CountryCardMap from "../components/CountryCardMap"
import CountryDetailMap from "../components/CountryDetailMap"
import CountryCardContainer from "../components/CountryCardContainer"

let BASE_URL = "http://141.94.204.108:8000/countries"

const Country = () => {
  let {id} = useParams()

  const [country, setCountry] = useState([])
  const [CountryName, setCountryName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 
  const [uid, setUid] = useState({id})

  const setUpdatedCountry = (updatedCountry) => {
    console.log("Updated UID : " + updatedCountry);
    setUid (updatedCountry);
    id = updatedCountry;
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setCountry(json)
            setIsPending(false)
        }) 
  }

  const parentFunction = (dataFromChild) => {
    //setCountry(dataFromChild);
    console.log(dataFromChild);
    };

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
    <div>
      <div>
        
        {/*
        <div><CountryCardContainer country={country} setUpdatedCountry={setUpdatedCountry}></CountryCardContainer></div>
        <div><CountryDetailMap country={country} setUpdatedCountry={setUpdatedCountry}></CountryDetailMap></div>
        <div className="country-map-card"><CountryCardMini country={country}></CountryCardMini></div>
        <div><CountryMapComponent country={country}></CountryMapComponent></div>
        <div className="country-map-card"><CountryCardMini country={country}></CountryCardMini></div>*/}
        <div><CountryDetailMap country={country} setUpdatedCountry={setUpdatedCountry}></CountryDetailMap></div>
        <div className="country-map-card"><CountryCardSummary country={country} setUpdatedCountry={setUpdatedCountry}></CountryCardSummary></div>
        <div className="country-map-card"><CountryMapComponent country={country} setUpdatedCountry={setUpdatedCountry}></CountryMapComponent></div>
      </div>
    </div>
    </Layout>
  )
}

export default Country