import React from 'react'
import Layout from "../components/Layout"
import { useContext } from "react";
import { cardContext } from "../App";
import AudioPlayer from "../components/AudioPlayer"
import TranslatorSelCard from "../components/TranslatorSelCard"
import ThemeSelCard from "../components/ThemeSelCard"
import VocaSelCard from "../components/VocaSelCard"

const Vocabularies = () => {
    const menuItems = useContext(cardContext);
    const vocabulary=menuItems.theme.vocabulary;
    menuItems.component="Vocabularies"
    let translator = menuItems.translator
    let theme_item = menuItems.theme
    let vocabulary_item = menuItems.vocabulary
    console.log(vocabulary_item)

  return (
    <Layout>
        <div className="mx-8">       
        <div>Your current selection : </div>
        <div className="current-selection">
          
          <div><TranslatorSelCard translator = {translator}></TranslatorSelCard></div>
          <div><ThemeSelCard theme_item = {theme_item}></ThemeSelCard></div>
          <div><VocaSelCard vocabulary_item={vocabulary_item}></VocaSelCard></div>
          
        </div>
        <div className="mb-4">&nbsp;</div>
        <hr/>
        <div>
            <AudioPlayer vocabulary_item={vocabulary_item}></AudioPlayer>
        </div>
        </div> 
    </Layout>
  )
}

export default Vocabularies