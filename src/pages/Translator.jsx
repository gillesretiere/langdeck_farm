import React from 'react'
import {useParams, useNavigate} from "react-router-dom"
import {useState, useEffect,useContext} from 'react'
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import SelectedTranslatorCard from "../components/SelectedTranslatorCard"
import { cardContext } from "../App";


let BASE_URL = "http://141.94.204.108:8000/translators"

const Translator = () => {
  const { auth, setAuth } = useAuth();
  let {id} = useParams() 
  const [languages, setLanguages] = useState([])
  const [languageName, setLanguageName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const menuItems = useContext(cardContext);
  menuItems.component="Translator"
  menuItems.translator=languages

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

  return (
    <Layout>
        <div className="mx-8">     
        {isPending && <Loading languageName={languageName} />}             
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          <SelectedTranslatorCard translator = {languages}></SelectedTranslatorCard>
          </div>
          <Link to={`/translators`}><div>Pick up another language</div></Link>
        </div> 
    </Layout>
  )
}

export default Translator