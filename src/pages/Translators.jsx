import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import TranslatorCard from "../components/TranslatorCard"

let BASE_URL = "http://141.94.204.108:8000/translators"

const Translators = () => {

  const [languages, setLanguages] = useState([])
  const [LanguageName, setLanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 

  useEffect(()=>{
    fetch(`${BASE_URL}/`)
        .then(response=>response.json())
        .then(json=>{
            setLanguages(json)
            setIsPending(true)
        })  
        .then()        
  }) 

  return (
    <Layout>
        <div className="mx-8">                
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                    {languages && languages.map(
                    (el)=>{
                        return (                               
                          <TranslatorCard key={el._id} translator = {el} />                     
                        )
                    }
                    )}
                </div>
        </div> 
    </Layout>
  )
}

export default Translators