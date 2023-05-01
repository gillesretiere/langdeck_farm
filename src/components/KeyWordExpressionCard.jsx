import React from 'react'
import CustomAudioPlayer from "../components/CustomAudioPlayer"

const KeyWordExpressionCard = ({w_expression}) => {
    let {rec_id, vocabulary_unit} = w_expression
  return (
    <div className="my-1">
      <div className="flex keyword-exp-translated">{w_expression.w_expression.translation}<span><CustomAudioPlayer path={w_expression.w_expression.audio_public_url}></CustomAudioPlayer></span></div>
      <div className="keyword-exp mb-3">{w_expression.w_expression.vocabulary_unit}</div>
    </div>
  )
}

export default KeyWordExpressionCard