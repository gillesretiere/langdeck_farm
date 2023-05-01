import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const TranslatorCard = ({translator}) => {
    let {language_uid, language_name_en, language_name_native, flag_icon} = translator;
    const menuItems = useContext(cardContext);
    menuItems.language.language_uid=language_uid
    menuItems.language.flag_icon=flag_icon
    menuItems.language.language_name_en=language_name_en
    menuItems.component="TranslatorCard"
    // console.log(menuItems.language.language_uid)    
    // console.log(translator)
  return (
    <>
<section data-theme="dark">
  <div className="box">
  <Link to={`/translators/${language_uid}`}>
        <div className="flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="split basis-1/2 pr-2 flex justify-center"><img className="h-10 w-10 rounded-full" src={flag_icon} alt="" /></span>
          <span className="split basis-1/2 pr-2 flex justify-start">
            <div className="flex flex-col items-start justify-items-start">
            <span className="split basis-1/2 pl-5 pr-2 text-xl">{language_name_en}</span>
            <span className="split basis-1/2 pl-5 pr-2">{language_name_native}</span>
            </div>
          </span>
        </div>
      </Link>    
  </div>
</section>    

    </>
  )
}

export default TranslatorCard