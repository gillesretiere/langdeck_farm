import React from 'react'

const DeckSelectionItemTopic = ({topics}) => {
  return (
    <div>
    {topics && (
        <div className="deck-selected-language"><p>{topics.topic}</p></div>
        )}
    </div>
  )
}

export default DeckSelectionItemTopic