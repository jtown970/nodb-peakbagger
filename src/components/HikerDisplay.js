import React, { Component } from 'react'


class HikerDisplay extends Component {
  constructor(){
    super()
    this.state = {
      isEditing: false,
      newFirst_name: '',
      newLast_name: '',
      newMiles: 0,
      newSummits: 0
    }

  }

  toggleEdit(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange(e){
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      miles: e.target.value,
      summits: e.target.value
    })
  }

  handleSavedChanges(){
    const {data} = this.props
    this.props.editHiker(data.id, this.newFirst_name)
    this.props.editHiker(data.id, this.state.LastName)
    this.props.editHiker(data.id, this.state.miles)
    this.props.editHiker(data.id, this.state.summits)
    this.toggleEdit()
  }
  
  render(){
    const newFirst_name = this.props.data.first_name
    const newLast_name = this.props.data.last_name
    const newMiles = this.props.data.miles
    const newSummits = this.props.data.summits   

    return (
      <div className="hikers-displayed">
        <p className="fist-name hiker-data">Name: {newFirst_name}</p>
        <p className="last-name hiker-data">Last name: {newLast_name}</p>
        <p className="miles hiker-data">Miles: {newMiles}</p>
        
       {!this.state.isEditing ? (
          <p className="hiker-data summits" onDoubleClick={() => this.toggleEdit()}>Conquered: {newSummits}/63</p>     
        ) : (
          <div>
            <input placeholder="Summits Conquered" type="number" onChange={(e) => this.handleChange(e)} />
            <button onClick={() => this.handleSavedChanges()}>Save</button>
            <button onClick={() => this.toggleEdit()}>Cancel</button>
          </div>
        )}

        <button className="btn delete-btn" onClick={() => this.props.delete(this.props.data.id)}>
          Delete
        </button>
        
      </div>
      
    )
  }

}
export default HikerDisplay
