import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import VocabularyLanguageThemeCard from "../components/VocabularyLanguageThemeCard"
import LanguageThemeCard from "../components/LanguageThemeCard"
import { cardContext } from "../App";

let BASE_URL = "http://141.94.204.108:8000/vocalangthemes"

const VocabulariesLanguageThemes = () => {
  let {id} = useParams();

  const [languages, setLanguages] = useState([])
  const [languageName, setlanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 

  const handleChangeVocabulariesLanguageThemesUid = (ev) => {
    setLanguages([])  
    setlanguageName(ev.target.value)      
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

  return (

    <Layout>
        <div className="mx-8">  

        {isPending && <Loading languageName={languageName} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(languages) ? languages.map(
            el => {
              return (                               
                <LanguageThemeCard key={el._id} languageThemes = {el} />                     
              )
          })
          : <LanguageThemeCard languageThemes = {languages} /> }
              
          </div>
          <Link to={`/vocalangthemes/${id}`}><div>Choose vocabulary</div></Link>
        </div> 
    </Layout>
  )
}

export default VocabulariesLanguageThemes
