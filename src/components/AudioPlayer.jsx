import React from 'react'
import '../styles/audio.css';
import AudioDisplayTrack from "../components/AudioDisplayTrack"

const AudioPlayer = ({vocabulary_item}) => {
    let {translation_ai, audio} = vocabulary_item
    return (
      <div>
        <div >
            <AudioDisplayTrack audio_path={audio}></AudioDisplayTrack>
        </div>
        <div>{translation_ai}</div>
        
      </div>
    );
  };
  export default AudioPlayer;