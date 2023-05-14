import React from 'react'
import CustomAudioPlayer from "../components/CustomAudioPlayer"

const KeyWordLemmaCard = ({w_lemma}) => {
    let {lemma, translation, definition, audio_public_url, lem_illustration} = w_lemma
  return (
    <>
    <div className="keyword-lemma-translated">{translation}<span><CustomAudioPlayer path={audio_public_url}></CustomAudioPlayer></span></div>
    <div className="keyword-lemma">{lemma}</div>
    <div className="keyword-lemma-definition">{definition}</div>
    <div className="keyword-illustration"><img src={lem_illustration}></img></div>
    </>
  )
}

export default KeyWordLemmaCard