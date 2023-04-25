import React from 'react'

const CountryFactsDetailsCard = ({country_facts}) => {
     let {content}  = country_facts;
  return (
    <div>{content.Languages}</div>
  )
}

export default CountryFactsDetailsCard