import React from 'react'
import {useState, useEffect,useContext} from 'react'
import Layout from '../components/Layout'
import Loading from "../components/Loading"
import LocalizerCard from '../components/LocalizerCard'
import NewTranslatorCard from "../components/NewTranslatorCard"
import { cardContext } from "../App";

let BASE_URL = "http://141.94.204.108:8000/localizer"

const Localizer = () => {
    const menuItems = useContext(cardContext);
    menuItems.translator = null;
    menuItems.domains = null;
    menuItems.themes = null;
    menuItems.topics = null;
    menuItems.story = null;

    const [regions, setRegions] = useState([])
    const [regionName, setRegionName] = useState('')
    const [isPending, setIsPending] = useState(true) 
    const [page, setPage] = useState(1)  

    const handleChangeRegionName = (ev) => {
        setRegions([])        
        setRegionName(ev.target.value)
        setIsPending(true)
        menuItems = [];
    }

    const handleChangePage = (ev) => {
        setRegions([])        
        setPage(ev.target.value)
        setIsPending(true)
    }

    useEffect(()=>{
    fetch(`${BASE_URL}?language_uid=${regionName}&page=${page}`)
        .then(response=>response.json())
        .then(json=>{
            setRegions(json)
            setIsPending(false)
        })  
        .then()        
    },[regionName, page]) 

  return (
    <>
    <Layout>
        <div className="mx-8">                
            {isPending && <Loading regionName={regionName} />}             
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {regions && regions.map(
                    (el)=>{
                        return (                               
                            <NewTranslatorCard key={el._id} translator = {el} />                           
                        )
                    }
                    )}
                </div>
        </div> 
    </Layout>
    </>
  )
}

export default Localizer