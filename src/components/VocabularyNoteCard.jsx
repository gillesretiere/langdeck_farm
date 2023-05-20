import React, { useState } from 'react';
import KeyWordLemmaIterator from '../components/KeyWordLemmaIterator';
import KeyWordExpressionIterator from "../components/KeyWordExpressionIterator"
import KeyWordPhraseIterator from "../components/KeyWordPhraseIterator"
import 'reactjs-popup/dist/index.css';


const VocabularyNoteCard = ({vocabulary_note}) => {
    let {notes, notes_transl, lem_illustration}=vocabulary_note
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <span className="py-1 px-2 ml-2 box-note" onClick={() => setIsOpen(true)}>&#128172; Note</span>      
        {isOpen && (
            <>
            <div className="keyword-container">
              <button className="x" onClick={() => setIsOpen(false)}>✖</button>
              < div className="bg-yellow-100 keyword-illustration story-intro">
                    <div className="font-bold">{notes}</div>
                    <div className="my-2 font-light">{notes_transl}</div>
                    <div><img src={lem_illustration}></img></div>
              </div>
            </div>            

            </>
        )}       
    </>

    
  )
}


export default VocabularyNoteCard