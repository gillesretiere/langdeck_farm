import React from 'react'

const mp3s = require.context('/public/assets/audios/ai', true,/\.(mp3)$/)
.keys()
.map((filename) => filename.replace('./', ''));

const VocAudioPlayer = ({path}) => {
    let short_path = path.split("/")[4];
    /*
    console.log(short_path);
    console.log(mp3s);
    */
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