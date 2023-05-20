import React from 'react'
import CustomAudioPlayer from "../components/CustomAudioPlayer"
import VocabularyNoteCard from "../components/VocabularyNoteCard"

const KeyWordLemmaCard = ({w_lemma}) => {
    let {lemma, translation, definition, audio_public_url, lem_illustration, notes, notes_transl} = w_lemma
  return (
    <>
    <div className="keyword-lemma-translated">{translation}<span><CustomAudioPlayer path={audio_public_url}></CustomAudioPlayer></span></div>
    <div className="keyword-lemma">{lemma}</div>
    <div className="keyword-lemma-definition">{definition}</div>
    <div className="keyword-illustration"><img src={lem_illustration}></img></div>
    {notes && ( <VocabularyNoteCard vocabulary_note = {w_lemma}></VocabularyNoteCard>)}
    </>
  )
}

export default KeyWordLemmaCard