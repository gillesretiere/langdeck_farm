import React from 'react'
import CustomAudioPlayer from "../components/CustomAudioPlayer"

const KeyWordLemmaCard = ({w_lemma}) => {
    let {lemma, translation, definition, audio_public_url} = w_lemma
  return (
    <>
    <div className="keyword-lemma-translated">{translation}<span><CustomAudioPlayer path={audio_public_url}></CustomAudioPlayer></span></div>
    <div className="keyword-lemma">{lemma}</div>
    <div className="keyword-lemma-definition">{definition}</div>
    </>
  )
}

export default KeyWordLemmaCard