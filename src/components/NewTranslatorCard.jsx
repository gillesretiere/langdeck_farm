import React from 'react'
import {useState, useEffect,useContext} from 'react'
import { cardContext } from "../App";
import { Link } from "react-router-dom"

const NewTranslatorCard = ({translator}) => {
    let {language_uid, language_name_fr, language_name_en, language_name_native, flag_icon} = translator;
    const menuItems = useContext(cardContext);
    menuItems.language.language_uid=language_uid
    menuItems.language.flag_icon=flag_icon
    menuItems.language.language_name_en=language_name_en
    menuItems.component="TranslatorCard"
    
    const shoot = () => {
      menuItems.translator = translator
    }
    // console.log(menuItems.language.language_uid)    
    // console.log(translator)
  return (
    <>
        <section data-theme="light">
            <div className="box" onClick={shoot}>
                <Link to={`/deckDomains/${language_uid}`}>
                    <div className="translator-card-wrapper">
                        <div className="translator-card-header">
                            <div className="translator-card-langtitle">{language_name_fr}</div>
                        </div>     
                        <hr/>
                        <div className="translator-card-lang">{language_name_native}</div>
                        <div className="translator-card-sep"></div>         
                        <div className="translator-card-image"><img className="h-20 w-20 rounded-full" src={flag_icon} alt="" /></div>                        
                        <div className="translator-card-footer">&nbsp;</div>
                    </div>
                </Link>    
            </div>
        </section>    
    </>
  )
}

export default NewTranslatorCard