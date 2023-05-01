import React from 'react'
import LanguageCardSummaryChart from "../components/LanguageCardSummaryChart";

const LanguageCardCountries = ({language}) => {
  return (
    <div><LanguageCardSummaryChart language={language}></LanguageCardSummaryChart></div>
    
  )
}

export default LanguageCardCountries