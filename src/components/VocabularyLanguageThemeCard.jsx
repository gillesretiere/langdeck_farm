import React from 'react'
import { Link } from "react-router-dom"

const VocabularyLanguageThemeCard = ({vocabulariesLanguageThemes}) => {
    // let {language_uid, theme, vocabularies} = vocabulariesLanguageThemes;
    console.log(vocabulariesLanguageThemes)
  return (
    <>
<section data-theme="dark">
  <div class="box">
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="split basis-1/2 pr-2 flex justify-center"></span>
          <span className="split basis-1/2 pr-2 flex justify-start">
            <div className="flex flex-col items-start justify-items-start">
            </div>
          </span>
        </div>
  </div>
</section>    

    </>
  )
}

export default VocabularyLanguageThemeCard