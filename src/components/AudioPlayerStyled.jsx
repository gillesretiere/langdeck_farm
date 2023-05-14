import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";



const AudioPlayerStyled = ({path}) => {
    const menuItems = useContext(cardContext);
    menuItems.component="AudioPlayerWWW"
    console.log(path)

  return (

    <div class="audio-player">
        <div class="controls">
            <div class="icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="audio-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
                <audio controls> 
                    <source src={path} type="audio/mpeg"/>       
                </audio>      
            </div>                   
        </div>                   
    </div>    
  )
}

export default AudioPlayerStyled