import React from 'react'
import KeyWordExpressionCard from "../components/KeyWordExpressionCard"

const KeyWordExpressionIterator = ({w_expression}) => {
    
  return (
    <>
        {Array.isArray(w_expression) ? w_expression.map(
            el => {
            return (                               
                <KeyWordExpressionCard key={el._id} w_expression = {el} />                     
            )
            })
            : <KeyWordExpressionCard w_expression = {w_expression} /> }    
        
    </>
  )
}

export default KeyWordExpressionIterator