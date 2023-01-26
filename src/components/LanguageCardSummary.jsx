import React from 'react'
import LanguageCardSummaryHeader from "../components/LanguageCardSummaryHeader";
import LanguageCardSummaryChart from "../components/LanguageCardSummaryChart";

const LanguageCardSummary = ({language}) => { 
    return (
        <div className="shadow-lg p-1 flex flex-col bg-FarmWhite card">
          <LanguageCardSummaryHeader language={language}></LanguageCardSummaryHeader>
          <LanguageCardSummaryChart language={language}></LanguageCardSummaryChart>
        </div>
      )
}

export default LanguageCardSummary