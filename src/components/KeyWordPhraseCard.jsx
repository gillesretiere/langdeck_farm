import React from 'react'
import CustomAudioPlayer from "../components/CustomAudioPlayer"

const KeyWordPhraseCard = ({w_phrase}) => {
    let {rec_id, vocabulary_unit} = w_phrase
  return (
    <div className="my-1">
      <div className="flex keyword-exp-translated">{w_phrase.w_phrase.translation}<span><CustomAudioPlayer path={w_phrase.w_phrase.audio_public_url}></CustomAudioPlayer></span></div>
      <div className="keyword-exp mb-3">{w_phrase.w_phrase.vocabulary_unit}</div>
    </div>
  )
}

export default KeyWordPhraseCard