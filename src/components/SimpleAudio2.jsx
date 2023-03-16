import React from 'react'



const SimpleAudio2 = ({src}) => {
  return (
    <div>
        <audio controls preload="metadata">
        <source src={src} type="audio/mpeg"/>
        </audio>
    </div>
  )
}

export default SimpleAudio2