import React from 'react'
const mp3s = require.context('/public/assets/audios/ai/hun', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const AudioPlayerHun = ({path}) => {
    let vk_path = path.split("/")
    let short_path = vk_path[5];
    let lang = vk_path[4];

  return (
    <div>{path}
        {mp3s.map((record) => (
            record==short_path ?
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

export default AudioPlayerHun