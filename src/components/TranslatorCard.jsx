import React from 'react'

const TranslatorCard = ({translator}) => {
    let {language_name_en} = translator;
  return (
    <div>{language_name_en}</div>
  )
}

export default TranslatorCard