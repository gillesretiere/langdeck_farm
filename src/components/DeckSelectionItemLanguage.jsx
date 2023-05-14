import React from 'react'

const DeckSelectionItemLanguage = ({translator}) => {
  return (
    <div>
        {translator && (
        <>
        <div className="deck-selected-language"><img src={translator.flag_icon} alt="" /><p>{translator.language_name_fr}</p></div>
        </>
        )}
    </div>
  )
}

export default DeckSelectionItemLanguage