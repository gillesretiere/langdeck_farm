import React from 'react'


// hooks
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Layout from "../components/Layout"
import CountryCard from "../components/CountryCard"
import Loading from "../components/Loading"

let BASE_URL = "http://141.94.204.108:8000/countries/language"

const LanguageCountries = () => {

    let {id} = useParams()

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
        fetch(`${BASE_URL}/${id}`)
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
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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

export default LanguageCountries