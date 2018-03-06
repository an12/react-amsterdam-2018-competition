import React, {Component} from 'react'
import './index.css'

class Body extends Component {
  render() {
    return (
      <div className="Body-body">
        <div className="Body-container">
          <h2 className="Body-title">
            <small>REACT AMSTERDAM IS A CELEBRATION OF GOOD THINGS COMING TOGETHER:</small>
            <div>REACT THAT ROCKS AND SPRING IN AMSTERDAM THAT BLOSSOMS</div>
          </h2>
          <p>
            A full-day, two-track conference on all things React, gathering Front-end and Full-stack developers across
            the globe in the tech heart of Europe. We're coming back with a new gig on <strong>April 13, 2018</strong>.
            Mark your calendars for the biggest React community event.
            <br />
            Same as last year, day before the main event, we'll host a{' '}
            <a href="https://react.amsterdam/workshops">training day</a>, with three workshops on advanced React and
            State Management as well as a crash course on React Native.
          </p>
          <div className="Body-images">
            <img src="/images/01.jpg" className="Body-img" alt="01"/>
            <img src="/images/02.jpg" className="Body-img" alt="02"/>
            <img src="/images/03.jpg" className="Body-img" alt="03"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
