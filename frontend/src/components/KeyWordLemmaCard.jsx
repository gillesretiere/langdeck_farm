import React from 'react'
import AudioPlayerWWW from "../components/AudioPlayerWWW"

const KeyWordLemmaCard = ({w_lemma}) => {
    let {lemma, translation, definition, audio_public_url} = w_lemma
  return (
    <>
    <div className="text-xl text-[#43BED9]">{translation}<span><AudioPlayerWWW path={audio_public_url}></AudioPlayerWWW></span></div>
    <div>{lemma}</div>
    <div>{definition}</div>
    </>
  )
}

export default KeyWordLemmaCard