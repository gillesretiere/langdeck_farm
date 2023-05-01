import React from 'react'
import LemmaCard from "../components/LemmaCard"

const PhraseWordCard = ({words}) => {
    let {w_lemma}=words
  return (
    <>
        <LemmaCard words={words}></LemmaCard>
    </>
  )
}

export default PhraseWordCard