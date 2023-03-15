import React from 'react';
import '../styles/noise.scss';

class AudioControls extends React.Component {
  state = { mp3Source : null };
  
  componentDidMount() {
    let path = require('../assets/audio/ai/EC01-ROM-001_34.mp3').default;
    const MP3_URL = "https://res.cloudinary.com/dhc7ovnwk/video/upload/v1678890600/langdeck/assets/audio/flex-vector-bord-ready-instrumental.m4a"
    this.setState({ mp3Source: this.loadTrack(MP3_URL) });
  }
  
  loadTrack = (url) => <source preload="auto" src={url} type="audio/mpeg" />;
  
  render() {
    const { mp3Source } = this.state;
    return (
      <div>
        {
          !!mp3Source && (
            <div>
              <audio ref={ref => this.audio = ref}>{mp3Source}</audio>
              {/* If you give the element a tabindex then you can use the :focus pseudo class to simulate a click. */}
              <button tabindex="0" className="noise" onClick={() => this.audio.play()}>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i>
</button>
              <button className="noise" onClick={() => this.audio.pause()}>Pause</button>
            </div>
          )
        }
        {
          !mp3Source && (
            <div>
              Mousic is loading...
            </div>
          )
        }
      </div>
    );
  }
}

export default AudioControls;