import React from 'react'

// hooks
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Layout from "../components/Layout"
import LanguageCard from "../components/LanguageCard"
import Loading from "../components/Loading"
import CountryCardMinimal from "../components/CountryCardMinimal"

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
        <div className="mx-8">     
          <div className="w-full h-screen flex flex-col md:flex-row">
            <div className="split basis-1/6"><CountryCardMinimal country_uid={id}></CountryCardMinimal></div>
            <div className="split basis-5/6">
            {isPending && <Loading languageName={languageName} />}             
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {languages && languages.map(
                    (el)=>{
                        return (                               
                            <LanguageCard key={el._id} language = {el} />                           
                        )
                    }
                    )}
                </div>
            </div>
          </div>                   

        </div> 
    </Layout>
  )
}

export default CountryLanguages