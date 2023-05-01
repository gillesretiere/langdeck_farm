import React from 'react'

const LocalizerCard = ({region}) => {
    let {language_uid, language_name_fr} = region;
    console.log(region)
  return (
    <div>{language_name_fr}</div>
  )
}

export default LocalizerCard