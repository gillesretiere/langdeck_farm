import React from 'react'
import Layout from "../components/Layout"
import { useContext } from "react";
import { cardContext } from "../App";
import VocabularyCard from "../components/VocabularyCard"

const ThemeVocabularies = () => {
    const menuItems = useContext(cardContext);
    const vocabularies=menuItems.theme.vocabularies;
    menuItems.component="ThemeVocabularies"
  return (
    <Layout>
        <div className="mx-8">                
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