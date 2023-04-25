import React from 'react'

const CountryFactsPeopleAndSociety = ({country_facts}) => {
    let {content}  = country_facts;
  return (
    <>
        <div className="card-label">Population</div>
        <div className="card-h4">{content.Population}</div>      
        <hr/>      
        <div className="card-label">Nationality (adjective)</div>
        <div className="card-h4">{content.Nationality.adjective}</div>      
        <hr/>            
        <div className="card-label">Languages</div>
        <div className="card-h4">{content.Languages}</div>   
        <hr/>        
        <div className="card-label">Ethnic groups</div>
        <div className="card-h4">{content.Ethnic_groups}</div>   
        <hr/>                
        <div className="card-label">Religions</div>
        <div className="card-h4">{content.Religions}</div>          
        <hr/> 
    </>
  )
}

export default CountryFactsPeopleAndSociety