import React from 'react'
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import CountryCard from "../components/CountryCard"
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
        <h2 className="text-lg text-center my-4">Countries - {countryName?countryName:"all countries"}</h2>
        <div className="mx-8">
        <label htmlFor="countries">Choose a countryName: </label>
            <select name="countries" id="countries" onChange={handleChangeCountryName}>
                <option value="">All countries</option>
                <option value="afg">Afghanistan</option>
                <option value="alb">Albanie</option>         
                <option value="arg">Argentine</option>
                <option value="rus">Russie</option>      
                <option value="aut">Autriche</option>                             
            </select>
            <label htmlFor="countries">Choose a page: </label>
            <select name="page" id="page" onChange={handleChangePage}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>                   
                <option value="5">5</option>              
            </select>
        </div>
        <div className="mx-8">                
            {isPending && <Loading countryName={countryName} />}             
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
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