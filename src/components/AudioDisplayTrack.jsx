

  /*

  */

  // Credits to Nick Jones's original vanilla source: https://codepen.io/nfj525/pen/rVBaab
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useRef } from "react";
import AudioControls from "../components/AudioControls"

const AudioDisplayTrack = ({audio_path}) => {

  const playList = [
    {
      name: 'name',
      writer: 'writer',
      img: '../assets/images/ame.png',
      src: '../assets/audio/ai/EC01-ROM-001_34.mp3',
      id: 1,
    },
  ]

return <div>DisplayTrack {audio_path} content here
  <AudioControls></AudioControls>
</div>;
};

 
  export default AudioDisplayTrack;