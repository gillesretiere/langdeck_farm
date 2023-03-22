import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";

const AudioPlayerWWW = ({path}) => {
    const menuItems = useContext(cardContext);
    menuItems.component="AudioPlayerWWW"
    console.log(path)
  return (
    <div>
        <audio controls preload="metadata">
        <source src={path} type="audio/mpeg"/>
        </audio>
    </div>
  )
}

export default AudioPlayerWWW