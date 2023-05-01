import React from 'react'
import {useState, useEffect} from 'react'
import DeckLanguageMapCard from "../components/DeckLanguageMapCard"
import DeckLanguageCardIterator from "../components/DeckLanguageCardIterator"

const DeckLanguageMap = ({translator}) => {
    let {language_uid, language_name_native, language_name_fr} = translator
    
    const [language, setLanguage] = useState([])
  
    useEffect(()=>{
      let BASE_URL = "http://141.94.204.108:8000/languages";
      fetch(`${BASE_URL}/${language_uid}`)
          .then(response=>response.json())
          .then(json=>{
              setLanguage(json);
              console.log(json);
          })          
    },[]) 

  return (
    <div className="deck-lang-map-container">
        <div className="deck-lang-map-container-label">Géographie de la langue<span className="deck-lang-map-container-title">{language_name_fr}</span></div>
        
        <div><DeckLanguageMapCard language={language}></DeckLanguageMapCard></div>
        <div><DeckLanguageCardIterator language={language}></DeckLanguageCardIterator></div>
    </div>
  )
}

export default DeckLanguageMap