import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import VocabularyLanguageThemeCard from "../components/VocabularyLanguageThemeCard"
import { cardContext } from "../App";

let BASE_URL = "http://141.94.204.108:8000/vocalangthemes"

const VocabulariesLanguageThemes = () => {
  let {language_uid} = useParams()
  console.log({language_uid});
  const [vocabulariesLanguageThemes, setVocabulariesLanguageThemes] = useState([])
  const [vocabulariesLanguageThemesUid, setVocabulariesLanguageThemesUid] = useState('')
  const [isPending, setIsPending] = useState(1) 

  const handleChangeVocabulariesLanguageThemesUid = (ev) => {
    setVocabulariesLanguageThemes([])  
    setVocabulariesLanguageThemesUid(ev.target.value)      
    setIsPending(true)
  }

  useEffect(()=>{
    fetch(`${BASE_URL}/${language_uid}`)
        .then(response=>response.json())
        .then(json=>{
            setVocabulariesLanguageThemes(json)
            setVocabulariesLanguageThemesUid(language_uid)
            setIsPending(false)
        })  
        .then()        
  },[language_uid]) 

  return (

    <Layout>
        <div className="mx-8">  

        {isPending && <Loading vocabulariesLanguageThemesUid={language_uid} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(vocabulariesLanguageThemes) ? vocabulariesLanguageThemes.map(
            el => {
              return (                               
                <VocabularyLanguageThemeCard key={el._id} vocabulariesLanguageThemes = {el} />                     
              )
          })
          : <VocabularyLanguageThemeCard vocabulariesLanguageThemes = {vocabulariesLanguageThemesUid} /> }
              
          </div>
          <Link to={`/vocalangthemes/${vocabulariesLanguageThemesUid}`}><div>Choose vocabulary</div></Link>
        </div> 
    </Layout>
  )
}

export default VocabulariesLanguageThemes
