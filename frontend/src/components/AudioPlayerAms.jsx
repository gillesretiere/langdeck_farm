import React from 'react'
import { useContext } from "react";
import { cardContext } from "../App";

const mp3s = require.context('/public/assets/audios/ai/ams', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const AudioPlayerAms = ({path}) => {
  const menuItems = useContext(cardContext);
  menuItems.component="AudioPlayerAms"
  let vk_path = path.split("/")
  let short_path = vk_path[5];
  let lang = vk_path[4];

  return (
    <div>{path}
        {mp3s.map((record) => (
            record.toString()===short_path.toString() ?
            (<div>
              <audio controls preload="metadata">
                <source src={require(`/public/assets/audios/ai/${lang}/${record}`)} type="audio/mpeg"/>
              </audio>
            </div>)
            : null
          ))}         
    </div>
  )
}

export default AudioPlayerAms