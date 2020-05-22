import React, { Component } from 'react'
import Delete from './Delete'

export default class AddHiker extends Component {
  constructor(){
    super()
    this.state = {
      isEditing: false,
      name: '',
      miles: 0,
      summits: 0
    }
  }
  render() {
    return (
      <div>
        <h1>AddHiker.js</h1>
      </div>
    )
  }
}
