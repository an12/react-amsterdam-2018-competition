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
          id="bgvid">
          <source src={process.env.PUBLIC_URL + '/video/video.webm'} type="video/webm" />
        </video>

        <div className="Header-overlay"/>

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
