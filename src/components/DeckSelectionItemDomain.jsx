import React from 'react'

const DeckSelectionItemDomain = ({domains}) => {
  return (
    <div>
        {domains && (
        <div className="deck-selected-language"><p>{domains.domain}</p></div>
        )}
    </div>
  )
}

export default DeckSelectionItemDomain