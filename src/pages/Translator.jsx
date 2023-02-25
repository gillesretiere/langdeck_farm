import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import TranslatorCard from "../components/TranslatorCard"

let BASE_URL = "http://141.94.204.108:8000/translators"

const Translator = () => {
  let {id} = useParams()
  const [languages, setLanguages] = useState([])
  const [languageName, setLanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 

  const handleChangeLanguageName = (ev) => {
    setLanguages([])        
    setLanguageName(ev.target.value)
    setIsPending(true)
  }


  useEffect(()=>{
    fetch(`${BASE_URL}/${id}`)
        .then(response=>response.json())
        .then(json=>{
            setLanguages(json)
            setIsPending(false)
        })  
        .then()        
  },[languageName]) 

  console.log(languages);
  
  return (

    
    <Layout>
        <div className="mx-8">     
        {isPending && <Loading languageName={languageName} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {Array.isArray(languages) ? languages.map(
            el => {
              return (                               
                <TranslatorCard key={el._id} translator = {el} />                     
              )
          })
          : <TranslatorCard translator = {languages} /> }
              
          </div>
          <Link to={`/translators/`}><div>Choose all language</div></Link>
        </div> 
    </Layout>
  )
}

export default Translator