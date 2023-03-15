import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { cardContext } from "../App";

/*
require.context('../assets/audio/ai', false, /\.(mp3|mp4)$/)

function importAll(r) {
  let audios = {};
   r.keys().forEach((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios
 }
const AllIAudios = importAll(require.context('../assets/audio/ai', false, /\.(mp3|mp4)$/));

const play = ({audio}) => {
  console.log(audio)
}
*/

const VocabularyCard = ({vocabulary}) => {
    let {alphabet, vocabulary_unit, lemma, translation_ai, audio}=vocabulary;
    const menuItems = useContext(cardContext);
    menuItems.component="Translator"


    const shoot = () => {
      menuItems.vocabulary=vocabulary
    }


  return (
    <>
<section data-theme="dark">
<Link to={`/vocabularies`}><div>Pick up another language</div>
  <div className="box" onClick={shoot}>
        <div className="v-card flex flex-row justify-start items-center divide-x divide-gray-200 p-3">
          <span className="basis-1/4 pr-2 flex justify-center">{alphabet}</span>
          <span className="basis-3/4 pr-2 flex justify-start">
            <div className="flex flex-col items-start justify-items-start">
            <span className="basis-1/4 pl-5 pr-2 text-xl">{vocabulary_unit}</span>
            <span className="basis-1/4 pl-5 pr-2">{lemma}</span>                     
            </div>
          </span>
        </div>
  </div>
  </Link>
</section>    

    </>
  )
}

export default VocabularyCard