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
            <div className="keyword-popup border-2">
                <span className="lemma-label">Definition</span>
                <h3><KeyWordLemmaIterator w_lemma = {w_lemma} /></h3>                
                <span className="lemma-label">Expressions</span>
                <h3><KeyWordExpressionIterator w_expression = {w_expressions} /></h3>
                <span className="lemma-label">Phrases</span>
                <h3><KeyWordPhraseIterator w_phrase = {w_phrases} /></h3>                
                
                <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
            </div>
            </>
        )}          
    </>

    
  )
}


export default KeyWordCard