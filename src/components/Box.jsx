import React, { Component } from 'react'

export class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      image:[]
    }
  }

  componentDidMount(){
    console.log(this.props.name)
    switch(true){
      case this.props.name === "square-1": return this.setState({image:["src/assets/red apple.jpg","This is an apple"]});
      case this.props.name === "square-2": return this.setState({image:["src/assets/trees.jpg","Trees"]});
      case this.props.name === "square-3": return this.setState({image:["src/assets/sea.jpg","Sea"]});
      default : break;
    }
    console.log(this.state.color)
  }

  render() {
    return (
      <div className='image-container' style={{backgroundColor:this.state.color}}>
        <img src={this.state.image[0]} alt="image cannot be displayed" />
        <div class="overlay">{this.state.image[1]} </div>
      </div>
    )
  }
}

export default Box