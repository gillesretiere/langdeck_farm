import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import VocabularyLanguageThemeCard from "../components/VocabularyLanguageThemeCard"
import SelectedTranslatorCard from "../components/SelectedTranslatorCard"
import LanguageThemeCard from "../components/LanguageThemeCard"
import StoryCard from "../components/StoryCard"

import { cardContext } from "../App";

let BASE_URL = "http://141.94.204.108:8000/stories"

const VocabulariesLanguageThemes = () => {
  let {id} = useParams();
  const [languages, setLanguages] = useState([])
  const [languageName, setlanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const menuItems = useContext(cardContext);
  menuItems.component="VocabulariesLanguageThemes"
  let translator = menuItems.translator

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
          <div>Your current selection : </div>
          <div className="current-selection">
          
            <div><SelectedTranslatorCard translator = {translator}></SelectedTranslatorCard></div>
          
          </div>
        <div className="mb-4">&nbsp;</div>
        <hr/>
        <div>Choose vocabulary : </div>
        
        </div> 
        <div>Choose deck (stories) : </div>
        {isPending && <Loading languageName={languageName} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1">
          {Array.isArray(languages) ? languages.map(
            el => {
              return (                               
                <StoryCard key={el._id} languageStories = {el} />                     
              )
          })
          : <StoryCard languageStories = {languages} /> }
              
          </div>
    </Layout>
  )
}

export default VocabulariesLanguageThemes
