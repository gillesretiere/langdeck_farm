import React from 'react'
import Layout from "../components/Layout"
import { useContext } from "react";
import { cardContext } from "../App";
import VocabularyCard from "../components/VocabularyCard"
import TranslatorSelCard from "../components/TranslatorSelCard"
import ThemeSelCard from "../components/ThemeSelCard"

const ThemeVocabularies = () => {
    const menuItems = useContext(cardContext);
    const vocabularies=menuItems.theme.vocabularies;
    menuItems.component="ThemeVocabularies"
    let translator = menuItems.translator
    let theme_item = menuItems.theme
    console.log(theme_item)

  return (
    <Layout>
        <div className="mx-8">       
        <div>Your current selection : </div>
        <div className="current-selection">
          
          <div><TranslatorSelCard translator = {translator}></TranslatorSelCard></div>
          <div><ThemeSelCard theme_item = {theme_item}></ThemeSelCard></div>
          
        </div>
        <div className="mb-4">&nbsp;</div>
        <hr/>
        <div>Choose vocabulary : </div>                 
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {Array.isArray(vocabularies) ? vocabularies.map(
        el => {
            return (                               
            <VocabularyCard key={el._id} vocabulary = {el} />                     
            )
        })
        : <VocabularyCard vocabulary = {vocabularies} /> }   
                </div>
        </div> 
    </Layout>
  )
}

export default ThemeVocabularies