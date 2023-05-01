import React, { useState } from 'react';
import KeyWordLemmaIterator from '../components/KeyWordLemmaIterator';
import KeyWordExpressionIterator from "../components/KeyWordExpressionIterator"
import KeyWordPhraseIterator from "../components/KeyWordPhraseIterator"
import 'reactjs-popup/dist/index.css';


const KeyWordCard = ({words}) => {
    let {w_lemma, w_expressions, w_phrases}=words
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <span className="py-1 px-2 ml-2 box-lemma" onClick={() => setIsOpen(true)}>{w_lemma.lemma}

        </span>      
        {isOpen && (
            <>
            <div className="keyword-container">
              <button className="x" onClick={() => setIsOpen(false)}>✖</button>
              <KeyWordLemmaIterator w_lemma = {w_lemma} />
              <div className="my-3"></div>
              <KeyWordExpressionIterator w_expression = {w_expressions} />
              <div className="my-3"></div>
              <KeyWordPhraseIterator w_phrase = {w_phrases} />
            </div>
            </>
        )}          
    </>

    
  )
}


export default KeyWordCard