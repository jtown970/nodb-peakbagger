import React, { Component } from 'react'


class HikerDisplay extends Component {
  constructor(){
    super()
    this.state = {
      isEditing: false,
      newMountain: "",
      newElevation: "",
      newGain: "",
      newRang: "",
      newMiles: 0,
      newDate_Hiked: "",
      newRating: 0,
      newNotes: ""

      
    }
  }

  toggleEdit(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange(e){
    this.setState({
      mountain: e.target.value,
      elevations: e.target.value,
      gain: e.target.value,
      rang: e.target.value,
      miles: e.target.value,
      Date_Hiked: e.target.value,
      rating: e.target.value,
      notes: e.target.value,
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
    const newMountain = this.props.data.mountain
    const newElevation = this.props.data.elevation
    const newGain = this.props.data.gain
    const newRang = this.props.data.rang  
    const newMiles = this.props.data.miles
    const newDate_Hiked = this.props.data.data_Hiked
    const newRating = this.props.data.rating
    const newNotes = this.props.data.notes 
    
    return (
      <div className="hikers-displayed">
        <p className="fist-name hiker-data">mountain: {newMountain}</p>
        <p className="fist-name hiker-data">Elevations: {newElevation}</p>
        <p className="last-name hiker-data">Last name: {newGain}</p>
        <p className="miles hiker-data">Miles: {newRang}</p>
        <p className="fist-name hiker-data">mountain: {newMiles}</p>
        <p className="last-name hiker-data">Last name: {newDate_Hiked}</p>
        <p className="miles hiker-data">Miles: {newRating}</p>
        
       {!this.state.isEditing ? (
          <p className="hiker-data summits" onDoubleClick={() => this.toggleEdit()}>Conquered: {newNotes}/63</p>     
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
