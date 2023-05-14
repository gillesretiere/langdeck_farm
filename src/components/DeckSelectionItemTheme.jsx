import React from 'react'

const DeckSelectionItemTheme = ({themes}) => {
  return (
    <div>
        {themes && (
        <div className="deck-selected-language"><p>{themes.theme}</p></div>
        )}
    </div>
  )
}

export default DeckSelectionItemTheme