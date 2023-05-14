import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import CurrentSelectionDeck from "../components/CurrentSelectionDeck"
import DeckDomainIterator from "../components/DeckDomainIterator"
import DeckSelection from "../components/DeckSelection"

import { cardContext } from "../App";

let BASE_URL = "http://141.94.204.108:8000/stories"

const DeckDomains = () => {
    let {id} = useParams();
    const [languages, setLanguages] = useState([])
    const [languageName, setlanguageName] = useState('')
    const [isPending, setIsPending] = useState(true) 
    const menuItems = useContext(cardContext);
    let translator = menuItems.translator
    /*
    menuItems.domain = ""
    menuItems.theme = ""
    menuItems.topic = ""
    menuItems.story = ""
    */
    menuItems.component="DeckDomains"
    menuItems.stories = languages
  
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
        <div className="mx-0">  

            <div><DeckSelection /></div>  
            <div className="mb-4">&nbsp;</div>
            {isPending && <Loading languageName={languageName} />}             
            <div className="grid sm:grid-cols-1">
                {Array.isArray(languages) ? languages.map(
                    el => {
                    return (                               
                        <DeckDomainIterator key={el._id} languageStories = {el} />                     
                    )
                })
                : <DeckDomainIterator languageStories = {languages} /> }
          </div>            
        </div> 

    </Layout>
  )
}

export default DeckDomains