import React, { Component } from 'react'
import Box from "./Box"

export class Body extends Component {
  render() {

    return (
      <div className='body'>
        <img src="colorwheel.webp" alt="colorwheel" />
        <p style={{textAlign:"center"}}>This is a color wheel with a showing of all the colors in retrospect with the primaries at 0,120,240(red,green,blue) respectively</p>
        <div className='square-container'>
            <Box name={"square-1"}/>
            <Box name={"square-2"}/>
            <Box name={"square-3"}/>
          </div>
      </div>
    )
  }
}

export default Body