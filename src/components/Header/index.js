import React, {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <header className="Header-header">
        <video
          className="Header-video"
          preload="auto"
          muted
          autoPlay
          loop
          poster="https://react.amsterdam/img/dummy_bg.jpg"
          id="bgvid">
          <source src="https://react.amsterdam/video/video.webm" type="video/webm"/>
          <source src="https://react.amsterdam/video/video.mp4" type="video/mp4" />
        </video>

        <div className="Header-overlay"
             style={{background: `url( ${process.env.PUBLIC_URL + '/images/overlay_bg.svg'}) 50% rgba(0, 0, 0, .4)`}}/>

        <div className="Header-wrapper">
          <div className="Header-logos">
            <img src={process.env.PUBLIC_URL + '/images/ralogo.svg'} className="Header-logo"
                 alt="React Amsterdam Logo"/>
            <img src={process.env.PUBLIC_URL + '/images/spbflogo.svg'} className="Header-logo" alt="SPB Frontend Logo"/>
          </div>
          <h1 className="Header-title">SPB Frontend & React Amsterdam Competition</h1>
        </div>
      </header>
    )
  }
}

export default Header
