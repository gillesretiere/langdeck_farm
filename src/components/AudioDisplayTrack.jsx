  // Credits to Nick Jones's original vanilla source: https://codepen.io/nfj525/pen/rVBaab
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { useEffect, useRef } from "react";
  import VocAudioPlayer from "../components/VocAudioPlayer"
  import AudioPlayerUkr from "../components/AudioPlayerUkr"
  import AudioPlayerRus from "../components/AudioPlayerRus"
  import AudioPlayerAms from "../components/AudioPlayerAms"
  import AudioPlayerHun from "../components/AudioPlayerHun"
  
  const AudioDisplayTrack = ({audio_path}) => {
    console.log(audio_path)
    const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"
    let vk_path = audio_path.split("/");
    let lang = vk_path[4];
    const project = () => {
      switch(lang) {

        case "ukr":   return <><AudioPlayerUkr path={audio_path}></AudioPlayerUkr></>;
        case "rus":   return <><AudioPlayerRus path={audio_path}></AudioPlayerRus></>;
        case "ams":   return <><AudioPlayerAms path={audio_path}></AudioPlayerAms></>;
        case "hun":   return <><AudioPlayerHun path={audio_path}></AudioPlayerHun></>;
        default:      return <>  DisplayTrack {audio_path} content here
        {/* <SimpleAudio2 src={audio_path}></SimpleAudio2> 
        ex : ../assets/audio/ai/ger/807cc6e8-ger.mp3*/}
        <VocAudioPlayer path={audio_path}></VocAudioPlayer></>
      }
    }

  return <div>
    {project()}

  </div>;
  };
  
   
    export default AudioDisplayTrack;