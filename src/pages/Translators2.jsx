import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import TranslatorCard from "../components/TranslatorCard"
import AutoComplete from "../components/AutoComplete"
import Dropdown from "../components/Dropdown"
import TranslatorsCard from "../components/TranslatorsCard"

let BASE_URL = "http://141.94.204.108:8000/translators"

const Translators2 = () => {
  const [translators, setTranslators] = useState([])
  const [translatorUid, setTranslatorUid] = useState('')
  const [isPending, setIsPending] = useState(1) 

  const handleChangeTranslatorUid = (ev) => {
    setTranslators([])  
    setTranslatorUid(ev.target.value)      
    setIsPending(true)
  }

  useEffect(()=>{
    fetch(`${BASE_URL}/${translatorUid}`)
        .then(response=>response.json())
        .then(json=>{
            setTranslators(json)
            setIsPending(false)
        })  
        .then()        
  },[translatorUid]) 

  return (
    <Layout>
        <div className="mx-8">     
        {isPending && <Loading translatorUid={translatorUid} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              <TranslatorsCard translators={translators}/>
          </div>
          <Link to={`/translators/`}><div>Choose all language</div></Link>
        </div> 
    </Layout>
  )
}

export default Translators2
