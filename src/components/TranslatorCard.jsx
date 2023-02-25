import React from 'react'
import { Link } from "react-router-dom"

const TranslatorCard = ({translator}) => {
    let {language_uid, language_name_en, language_name_native} = translator;
    console.log(translator)
  return (
    <>
      <Link to={`/translators/${language_uid}`}><div>{language_name_native}</div></Link>
    </>
  )
}

export default TranslatorCard