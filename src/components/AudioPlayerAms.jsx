import React from 'react'
const mp3s = require.context('/public/assets/audios/ai/ams', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const AudioPlayerAms = ({path}) => {
    let vk_path = path.split("/")
    let short_path = vk_path[5];
    console.log(mp3s)
    console.log(short_path)

  return (
    <div>{path}
{mp3s.map((record) => (
            record==short_path ?
(<div>
        <audio controls preload="metadata">
        <source src={require(`/public/assets/audios/ai/ams/${record}`)} type="audio/mpeg"/>
        </audio>
</div>)
: null
  ))}         
    </div>
  )
}

export default AudioPlayerAms