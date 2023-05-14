import React, { useState } from 'react';
import KeyWordLemmaIterator from '../components/KeyWordLemmaIterator';
import KeyWordExpressionIterator from "../components/KeyWordExpressionIterator"
import KeyWordPhraseIterator from "../components/KeyWordPhraseIterator"
import 'reactjs-popup/dist/index.css';


const PhraseNoteCard = ({phrase}) => {
    let {notes, illustration}=phrase
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <span className="py-1 px-2 ml-2 box-note" onClick={() => setIsOpen(true)}>&#128172; Note</span>      
        {isOpen && (
            <>
            <div className="keyword-container">
              <button className="x" onClick={() => setIsOpen(false)}>✖</button>
              < div className="keyword-illustration story-intro">
                    <div className="my-2">{notes}</div>
                    <div><img src={illustration}></img></div>
              </div>
            </div>            

            </>
        )}       
    </>

    
  )
}


export default PhraseNoteCard