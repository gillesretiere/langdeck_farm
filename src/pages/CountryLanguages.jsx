import React from 'react'

// hooks
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Layout from "../components/Layout"
import LanguageCard from "../components/LanguageCard"
import Loading from "../components/Loading"

let BASE_URL = "http://141.94.204.108:8000/languages/country"

const CountryLanguages = () => {

    let {id} = useParams()

    const [languages, setLanguages] = useState([])
    const [languageName, setLanguageName] = useState('')
    const [isPending, setIsPending] = useState(true) 
    const [page, setPage] = useState(1) 
  
    const handleChangeLanguageName = (ev) => {
      setLanguages([])        
      setLanguageName(ev.target.value)
      setIsPending(true)
    }
  
    const handleChangePage = (ev) => {
      setLanguages([])        
      setPage(ev.target.value)
      setIsPending(true)
    }
  
    useEffect(()=>{
      fetch(`${BASE_URL}/${id}`)
          .then(response=>response.json())
          .then(json=>{
              setLanguages(json)
              setIsPending(false)
          })          
    },[languageName, page]) 


  return (
    <Layout>
        <h2 className="text-lg text-center my-4">Languages - {languageName?languageName:"all languages"}</h2>
        <div className="mx-8">
        <label htmlFor="languages">Choose a language: </label>
            <select name="languages" id="languages" onChange={handleChangeLanguageName}>
                <option value="">All languages</option>
                {languages && languages.map(item => (
                    <option value={item.language_uid}>{item.language_name_fr}</option>
                ))}        
                <option value="">All languages</option>           
            </select>
            <label htmlFor="languages">Choose a page: </label>
            <select name="page" id="page" onChange={handleChangePage}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>                   
                <option value="5">5</option>              
            </select>
        </div>
        <NavLink className={({ isActive }) => isActive ? "active-link" : "p-4"} to="/newLanguage">New</NavLink>
        <div className="mx-8">                
            {isPending && <Loading languageName={languageName} />}             
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {languages && languages.map(
                    (el)=>{
                        return (                               
                            <LanguageCard key={el._id} language = {el} />                           
                        )
                    }
                    )}
                </div>
            
        </div> 
    </Layout>
  )
}

export default CountryLanguages