import React from 'react'

const KeyWordPhraseCard = ({w_phrase}) => {
    let {rec_id, vocabulary_unit} = w_phrase
  return (
    <div>{w_phrase.w_phrase.translation}</div>
  )
}

export default KeyWordPhraseCard