import React, { Component } from 'react'

class AddHiker extends Component {
  constructor(){
    super()
    this.state = {
      isAdding: false,
      first_name: '',
      last_name: '',
      miles: 0,
      summits: 0
    }
  }

  toggleAdd(){
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  handleFistName(e){
    this.setState({
      first_name: e.target.value
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
        {/* <h1>AddHiker.js</h1> */}

        {!this.state.isAdding ? (
          <button  className="btn add-hiker-btn" onClick={() => this.toggleAdd()}>ADD HIKER</button>     
        ) : (
          <div>
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
