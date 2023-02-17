import React from 'react'
import { Link } from "react-router-dom"
import CountryFactsPeopleAndSociety from "../components/CountryFactsPeopleAndSociety"
import CountryFactsGeography from "../components/CountryFactsGeography";

const CountryFactsCard = ({country}) => {
    let {country_uid, country_facts} = country
    console.log(country)
  return (
    <>
        <div>
            {country_facts && country_facts.sort((a, b) => a.section > b.section?1:-1).map(
            (el, index)=>{
                console.log(index, el);
                switch (index)
                    {
                    case 4:
                        return ( 
                            <div><CountryFactsGeography key={el.country_uid} country_facts = {el}></CountryFactsGeography></div> 
                        )
                    case 8:
                        return ( 
                            <div><CountryFactsPeopleAndSociety key={el.country_uid} country_facts = {el}></CountryFactsPeopleAndSociety></div> 
                        )
                    default: 
                        return (<></>)
                    }
            }
            )}    
        </div>
    </>
  )
}

export default CountryFactsCard