import React, { Component } from 'react'

export default class AddPeak extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: false,
      peak: {
        newMountain: '',
        newElevation: '',
        newDate: 0,
        newNotes: ''
      },
    }
  }

  toggleAdd(){
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  handleMountain(e){
    this.setState({
      newMountain: e.target.value
    })
  }
  handleElevation(e){
    this.setState({
      newElevation: e.target.value
    })
  }
  handleDate(e){
    this.setState({
      newDate: e.target.value
    })
  }

  handleNotes(e){
    this.setState({
      newNotes: e.target.value
    })
  }

  handleSavedAdd(){
    this.props.addPeak( this.state.peak.newMountain, this.state.peak.newElevation, this.state.peak.newDate)
    this.toggleAdd()
  }
  render() {
    

    return (
      <div>
        {/* <h1>AddHiker.js</h1> */}

        {!this.state.isAdding ? (
          <button  className="btn add-hiker-btn" onClick={() => this.toggleAdd()}>ADD Mountain</button>     
        ) : (
          <div>
            <input placeholder="Mountain name" onChange={(e) => this.handleMountain(e)} />
            <input type="number" placeholder="Elevation" onChange={(e) => this.handleElevation(e)} />
            <input placeholder="Date Hiked" type="number" onChange={(e) => this.handleDate(e)} />
            <input placeholder="Notes" type="text" onChange={(e) => this.handleNotes(e)} />
            <button className="btn save-btn" onClick={() => this.handleSavedAdd()}>Save</button>
            <button className="btn cancel-btn" onClick={() => this.toggleAdd()}>Cancel</button>
          </div>
        )}
      </div>
    )
  }
}
