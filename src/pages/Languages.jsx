import React from 'react'
// hooks
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import LanguageCard from "../components/LanguageCard"
import Loading from "../components/Loading"

let BASE_URL = "http://141.94.204.108:8000/languages"


const Languages = () => {

  const [languages, setLanguages] = useState([])
  const [languageName, setLanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 

  useEffect(()=>{
    fetch(`${BASE_URL}?language_uid=${languageName}&page=${page}`)
        .then(response=>response.json())
        .then(json=>{
            setLanguages(json)
            setIsPending(false)
        })          
  },[languageName, page]) 

  return (
    <Layout>
        <div className="mx-8">                
            {isPending && <Loading languageName={languageName} />}             
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {languages && languages.map(
                    (el)=>{
                      console.log(languages)
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
export default Languages