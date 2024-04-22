import React, { Component } from 'react'

export class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: "antiquewhite"
    }
  }
  render() {
    return (
      <div className='sidebar' style = {{backgroundColor:this.state.color}}>
        <ul className='seperators'>
          <li onClick={()=>{this.setState({color: "red"})}}>Red</li>
          <li onClick={()=>{this.setState({color: "yellow"})}}>Yellow</li>
          <li onClick={()=>{this.setState({color: "orange"})}}>Orange</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar