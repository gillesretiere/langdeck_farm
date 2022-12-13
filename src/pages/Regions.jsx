import React from 'react'
import {useState, useEffect} from 'react'
import Layout from "../components/Layout"
import RegionCard from "../components/RegionCard"
import Loading from "../components/Loading"

let BASE_URL = "http://141.94.204.108:8000/regions"

const Regions = () => {
  const [regions, setRegions] = useState([])
  const [regionName, setRegionName] = useState('')
  const [isPending, setIsPending] = useState(true) 
  const [page, setPage] = useState(1) 

  const handleChangeRegionName = (ev) => {
    setRegions([])        
    setRegionName(ev.target.value)
    setIsPending(true)
  }

  const handleChangePage = (ev) => {
    setRegions([])        
    setPage(ev.target.value)
    setIsPending(true)
  }

  useEffect(()=>{
    fetch(`${BASE_URL}?region_name_fr=${regionName}&page=${page}`)
        .then(response=>response.json())
        .then(json=>{
            setRegions(json)
            setIsPending(false)
        })          
  },[regionName, page]) 

  return (
    <Layout>
        <h2 className="text-lg text-center my-4">Regions - {regionName?regionName:"all regions"}</h2>
        <div className="mx-8">
        <label htmlFor="regions">Choose a region: </label>
            <select name="regions" id="regions" onChange={handleChangeRegionName}>
                <option value="">All regions</option>
                <option value="eur">Europe</option>
                <option value="asi">Asie</option>         
            </select>
            <label htmlFor="regions">Choose a page: </label>
            <select name="page" id="page" onChange={handleChangePage}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>                   
                <option value="5">5</option>              
            </select>
        </div>
        <div className="mx-8">                
            {isPending && <Loading regionName={regionName} />}             
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {regions && regions.map(
                    (el)=>{
                        return (                               
                            <RegionCard key={el._id} region = {el} />                           
                        )
                    }
                    )}
                </div>
            
        </div> 
    </Layout>
  )
}
export default Regions