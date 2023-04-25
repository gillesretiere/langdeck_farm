import React from 'react'

const KeyWordExpressionCard = ({w_expression}) => {
    let {rec_id, vocabulary_unit} = w_expression
  return (
    <div>{w_expression.w_expression.translation}</div>
  )
}

export default KeyWordExpressionCard