import React from 'react'
import { useState, useEffect} from "react";


const SimpleAudio2 = ({src}) => {
  const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"
  const baseUrl = "../assets/audio/ai/57f5b4fb-dan.mp3";
  
  return (
    <div>
        <audio controls preload="metadata">
        
        <source src={src} type="audio/mpeg"/>
        </audio>
    </div>
  )
}

export default SimpleAudio2