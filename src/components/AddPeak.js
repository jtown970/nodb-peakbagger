import React, { Component } from 'react'

export default class AddPeak extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: false,
      peak: {},
      mountain: '',
      elevation: 0,
      date: 0
    }
  }

  toggleAdd(){
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  handleFistName(e){
    this.setState({
      peak: e
    })
  }
  handleLastName(e){
    this.setState({
      last_name: e.target.value
    })
  }
  handleMiles(e){
    this.setState({
      miles: e.target.value
    })
  }
  handleSummits(e){
    this.setState({
      summits: e.target.value
    })
  }

  handleSavedAdd(){
    this.props.addHiker( this.state.first_name, this.state.last_name, this.state.miles, this.state.summits)
    this.toggleAdd()
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
