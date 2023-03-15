import React from 'react'
import {useEffect, useState} from 'react'
import ReactDOM from "react-dom";
import ringer from "../assets/audio/ai/EC01-ROM-001_45.mp3";
require.context('../assets/audio/ai', false, /\.(mp3|mp4)$/)

const AudioPlayCard = ({audio_item}) => {
    
    let test_path = "../assets/audio/ai/EC01-ROM-001_45.mp3"
    let path = {audio_item};
    console.log(test_path)
    const audio = new Audio(ringer);
    console.log(audio)
    audio.loop = true;

    const [soundFile, setSoundFile] = useState(null);

    useEffect(() => {
      async function importFile() {
        let file = require("../assets/audio/ai/EC01-ROM-001_04.mp3");
        setSoundFile(file);
      }
      importFile();
    }, []);

  return (
    <div>
        <audio src={soundFile}></audio>
    </div>     
  )
}

export default AudioPlayCard
