  // Credits to Nick Jones's original vanilla source: https://codepen.io/nfj525/pen/rVBaab
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { useEffect, useRef } from "react";
  import AudioControls from "../components/AudioControls"
  import SimpleAudio from "../components/SimpleAudio"
  import SimpleAudio2 from "../components/SimpleAudio2"
  import VocAudioPlayer from "../components/VocAudioPlayer"
  
  const AudioDisplayTrack = ({audio_path}) => {
    //console.log(audio_path)
    const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"

    const baseUrl = "../assets/audio/ai/";

  return <div>DisplayTrack {audio_path} content here
    {/* <SimpleAudio2 src={audio_path}></SimpleAudio2> */}
    <VocAudioPlayer path={audio_path}></VocAudioPlayer>
  </div>;
  };
  
   
    export default AudioDisplayTrack;