import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";

const CustomAudioPlayer = ({path}) => {
    const menuItems = useContext(cardContext);
    menuItems.component="CustomAudioPlayer"
  return (
    <span className="audioPlayer">
        <audio controls preload="metadata">
        <source src={path} type="audio/mpeg"/>
        </audio>
    </span>
  )
}

export default CustomAudioPlayer