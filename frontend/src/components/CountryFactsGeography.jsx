import React from 'react'

const CountryFactsGeography = ({country_facts}) => {
    let {content}  = country_facts;
  return (
    <>
        <div className="card-label">Location</div>
        <div className="card-h4">{content.Location}</div>   
        <hr/>        
    </>
  )
}

export default CountryFactsGeography