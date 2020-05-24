import React, { Component } from 'react'

class AddHiker extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: false,
      mountain: "",
      elevation: "",
      gain: "",
      rang: "",
      miles: 0,
      date_Hiked: "",
      rating: 0,
      notes: ""
    }
  }

  toggleAdd(){
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  handleMountain(e){
    this.setState({
      mountain: e.target.value
    })
  }
  handleElevation(e){
    this.setState({
      elevation: e.target.value
    })
  }
  handleGain(e){
    this.setState({
      gain: e.target.value
    })
  }
  handleRang(e){
    this.setState({
      rang: e.target.value
    })
  }

  handleMiles(e){
    this.setState({
      miles: e.target.value
    })
  }
  handleDate_Hiked(e){
    this.setState({
      date_Hiked: e.target.value
    })
  }
  handleRating(e){
    this.setState({
      rating: e.target.value
    })
  }
  handleNotes(e){
    this.setState({
      notes: e.target.value
    })
  }

  handleSavedAdd(){
    this.props.addMountain( this.state.mountain, this.state.elevation, this.state.gain, this.state.rang, this.state.miles, this.state.date_Hiked, this.state.rating, this.state.notes)
    this.toggleAdd()
  }

  render() {
    return (
      <div>
        <h1>AddMountain.js</h1>

        {!this.state.isAdding ? (
          <button  className="btn add-hiker-btn" onClick={() => this.toggleAdd()}>ADD Mountain</button>     
        ) : (
          <div>
            <input placeholder="First Name" onChange={(e) => this.handleFistName(e)} />
            <input placeholder="Last Name" onChange={(e) => this.handleLastName(e)} />
            <input placeholder="Miles Hiked" type="number" onChange={(e) => this.handleMiles(e)} />
            <input placeholder="Summits Conquered" type="number" onChange={(e) => this.handleSummits(e)} />
            <input placeholder="First Name" onChange={(e) => this.handleFistName(e)} />
            <input placeholder="Last Name" onChange={(e) => this.handleLastName(e)} />
            <input placeholder="Miles Hiked" type="number" onChange={(e) => this.handleMiles(e)} />
            <input placeholder="Summits Conquered" type="number" onChange={(e) => this.handleSummits(e)} />
            <button className="btn save-btn" onClick={() => this.handleSavedAdd()}>Save</button>
            <button className="btn cancel-btn" onClick={() => this.toggleAdd()}>Cancel</button>
          </div>
        )}
      </div>
    )
  }
}
export default AddHiker
