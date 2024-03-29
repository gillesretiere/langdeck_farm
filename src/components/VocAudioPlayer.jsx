import React from 'react'
// https://stackoverflow.com/questions/59809746/how-to-get-require-context-to-work-with-create-react-app-with-withou-craco
// https://github.com/sidorares/react-melbourne-feb-2017/blob/7c5424caaf17c9f061c2ce03547802b2d4c319d0/source/website/Application.js#L6
// https://stackoverflow.com/questions/34582405/react-wont-load-local-images
// https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react
// const www="https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"

const mp3s = require.context('/public/assets/audios/ai', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const VocAudioPlayer = ({path}) => {
    let vk_path = path.split("/")
    let short_path = vk_path[4] +"/" +vk_path[5];
    console.log(mp3s)
    console.log(short_path)

  return (
    <div>{path}
{mp3s.map((record) => (
            record==short_path ?
(<div>
        <audio controls preload="metadata">
        <source src={require(`/public/assets/audios/ai/${record}`)} type="audio/mpeg"/>
        </audio>
</div>)
: null
  ))}         
    </div>
  )
}

export default VocAudioPlayer