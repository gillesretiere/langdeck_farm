  // Credits to Nick Jones's original vanilla source: https://codepen.io/nfj525/pen/rVBaab
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { useEffect, useRef } from "react";
  import AudioControls from "../components/AudioControls"
  import SimpleAudio from "../components/SimpleAudio"
  import SimpleAudio2 from "../components/SimpleAudio2"
  
  const AudioDisplayTrack = ({audio_path}) => {
    console.log(audio_path)
    const src=require("../assets/audio/ai/EC01-HUN-001_34.mp3")
    const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"
    const playList = [
      {
        name: 'name',
        writer: 'writer',
        img: '../assets/images/ame.png',
        src: '../assets/audio/ai/EC01-HUN-001_34.mp3',
        id: 1,
      },
    ]
  return <div>DisplayTrack {audio_path} content here
    <SimpleAudio2 src={src}></SimpleAudio2>
  </div>;
  };
  
   
    export default AudioDisplayTrack;