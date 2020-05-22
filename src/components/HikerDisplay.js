import React, { Component } from 'react'

export default class HikerDisplay extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      miles: 0,
      summits: 0
    }
  }


  render() {
    return (
      <div>
        <h1>HikerDisplay.js</h1>
      </div>
    )
  }
}
