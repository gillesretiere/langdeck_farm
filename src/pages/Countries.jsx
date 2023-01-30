import React from 'react'
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import CountryCard from "../components/CountryCard"
import CountryCardHeader from "../components/CountryCardHeader"
import Loading from "../components/Loading"

let BASE_URL = "http://141.94.204.108:8000/countries"

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 

  const handleChangeCountryName = (ev) => {
    setCountries([])        
    setCountryName(ev.target.value)
    setIsPending(true)
  }

  const handleChangePage = (ev) => {
    setCountries([])        
    setPage(ev.target.value)
    setIsPending(true)
  }

  useEffect(()=>{
    fetch(`${BASE_URL}?country_uid=${countryName}&page=${page}`)
        .then(response=>response.json())
        .then(json=>{
            setCountries(json)
            setIsPending(false)
        })          
  },[countryName, page]) 

  return (
    <Layout>
        <div className="mx-8">                
            {isPending && <Loading countryName={countryName} />}             
             <div>
                    {countries && countries.map(
                    (el)=>{
                        return (                               
                            <CountryCard key={el._id} country = {el} />                           
                        )
                    }
                    )}
                </div>
        </div> 
    </Layout>
  )
}
export default Countries