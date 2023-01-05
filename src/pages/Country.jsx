import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CountryMapComponent from "../components/CountryMapComponent"

let BASE_URL = "http://141.94.204.108:8000/countries"

const Country = () => {
  let {id} = useParams()

  const [country, setCountry] = useState([])
  const [CountryName, setCountryName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 

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
    <div id="country-map-component">
      <h1>{country.country_name_fr}</h1>
      <div><CountryMapComponent country={country}></CountryMapComponent></div>
    </div>
    </Layout>
  )
}

export default Country