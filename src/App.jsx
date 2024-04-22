import React, { Component } from 'react'
import Body from './components/Body'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import "../src/App.css"

export class App extends Component {

  render() {
    return (
      <div className='main'>
        <Header/>
        <Sidebar/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App