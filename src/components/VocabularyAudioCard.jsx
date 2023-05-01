import React from 'react'
import AudioDisplayTrack from "../components/AudioDisplayTrack"

const VocabularyAudioCard = ({vocabulary_item}) => {
    let {translation_ai, audio} = vocabulary_item
    return (
      <div>
        <div >
            <AudioDisplayTrack vocabulary_item={vocabulary_item}></AudioDisplayTrack>
        </div>
        <div>{translation_ai}</div>
        
      </div>
    );
  };
  export default VocabularyAudioCard;