import React from 'react'
// https://stackoverflow.com/questions/59809746/how-to-get-require-context-to-work-with-create-react-app-with-withou-craco
// https://github.com/sidorares/react-melbourne-feb-2017/blob/7c5424caaf17c9f061c2ce03547802b2d4c319d0/source/website/Application.js#L6
// https://stackoverflow.com/questions/34582405/react-wont-load-local-images
// https://stackoverflow.com/questions/44969877/if-condition-inside-of-map-react

const mp3s = require.context('/public/assets/audios/ai', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const VocAudioPlayer = ({path}) => {
    let short_path = path.split("/")[4];
    console.log(short_path);
    console.log(mp3s);
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