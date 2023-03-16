
import React from 'react';
import '../styles/noise.scss';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
/*
Thenks to https://foolishdeveloper.com/audio-player-in-react-js/
Saved my life !
*/

class SimpleAudio extends React.Component {
  state = {
    playing: false,
    currentTime: 0,
    duration: 0
  }

  audioRef = React.createRef()

  handlePlay = () => {
    this.audioRef.current.play()
    this.setState({ playing: true })
  }

  handlePause = () => {
    this.audioRef.current.pause()
    this.setState({ playing: false })
  }

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current.currentTime,
      duration: this.audioRef.current.duration
    })
  }

  render() {
    const { playing, currentTime, duration } = this.state
    const { src } = this.props

    return (
      <div>
        <audio
          ref={this.audioRef}
          src={src}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <button tabindex= {playing ? '1' : '0'} className="noise" onClick={this.handlePlay}>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i>
          {playing ? <FaPause /> : <FaPlay/>}
        </button >
        <hr></hr>
        <button className="noise" onClick={this.handlePause}><FaStop /></button>
        <p>{currentTime} / {duration}</p>
      </div>
    )
  }
}

export default SimpleAudio;