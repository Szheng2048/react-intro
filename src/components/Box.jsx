import React, { Component } from 'react'

export class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      color:"white"
    }
  }

  componentDidMount(){
    console.log(this.props.name)
    switch(true){
      case this.props.name === "square-1": this.setState({color: "red"});
      case this.props.name === "square-2": this.setState({color: "green"});
      case this.props.name === "square-3": this.setState({color: "blue"});
    }
    console.log(this.state.color)
  }

  render() {
    return (
      <div className='boxes' style={{backgroundColor:this.state.color}}>
        {console.log(this.props.name)}
      </div>
    )
  }
}

export default Box