  import React from 'react';
  // default :  import VocAudioPlayer from "../components/VocAudioPlayer"
  import { useContext } from "react";
  import { cardContext } from "../App";
  import AudioPlayerUkr from "../components/AudioPlayerUkr"
  import AudioPlayerAms from "../components/AudioPlayerAms"
  import AudioPlayerWWW from "../components/AudioPlayerWWW"

  const AudioDisplayTrack = ({vocabulary_item}) => {
    let {audio, audio_public_url} = vocabulary_item
    console.log(audio)
    const menuItems = useContext(cardContext);
    menuItems.component="AudioDisplayTrack"
 
    const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"
    let vk_path = audio.split("/");
    let lang = vk_path[4];
    const project = () => {
      switch(lang) {
        case "ukr":   
          console.log("ukr");
          return <><AudioPlayerUkr path={audio}>UKR</AudioPlayerUkr></>;
        case "ams":   
          console.log("ams");
          return <><AudioPlayerAms path={audio}>AMS</AudioPlayerAms></>;              
        case "eng":   
          console.log("eng");
          return <><AudioPlayerWWW path={audio_public_url}>ENG</AudioPlayerWWW></>;           
        default: 
          console.log("www");
          return <><AudioPlayerWWW path={www}>CDN Mode</AudioPlayerWWW></>
        {/*
        case "dan":   return <><AudioPlayerDan path={audio_path}></AudioPlayerDan></>;
        case "rus":   return <><AudioPlayerRus path={audio_path}></AudioPlayerRus></>;
        case "hun":   return <><AudioPlayerHun path={audio_path}></AudioPlayerHun></>;
        <SimpleAudio2 src={audio_path}></SimpleAudio2> 
        ex : ../assets/audio/ai/ger/807cc6e8-ger.mp3*/}
        
      }
    }

  return <div>
    {project()}
  </div>;
  };
  
   
    export default AudioDisplayTrack;