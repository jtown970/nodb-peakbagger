import React, { Component } from 'react'


class MountainDisplay extends Component {
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
      date_Hiked: e.target.value,
      rating: e.target.value,
      notes: e.target.value,
    })
  }

  handleSavedChanges(){
    const {data} = this.props
    this.props.editMountain(data.id, this.state.notes)
    this.toggleEdit()
  }
  
  render(){
    const newMountain = this.props.data.mountain
    const newElevation = this.props.data.elevation
    const newGain = this.props.data.gain
    const newRang = this.props.data.rang  
    const newMiles = this.props.data.miles
    const newDate_Hiked = this.props.data.date_Hiked
    const newRating = this.props.data.rating
    const newNotes = this.props.data.notes 
    
    return (
      <div className="hikers-displayed">
        <ul>Mountain:</ul>
        <p className="fist-name hiker-data"> {newMountain}</p>
        <hr className="hr"/>
        <ul>Elevation:</ul>
        <p className="fist-name hiker-data">{newElevation}</p>
        <hr className="hr"/>
        <ul>Elevation Gain:</ul>
        <p className="last-name hiker-data">{newGain}</p>
        <hr className="hr"/>
        <ul>Mountain Rang:</ul>
        <p className="miles hiker-data">{newRang}</p>
        <hr className="hr"/>
        <ul>Miles</ul>
        <p className="fist-name hiker-data">{newMiles}</p>
        <hr className="hr"/>
        <ul>Date Hiked:</ul>
        <p className="last-name hiker-data">{newDate_Hiked}</p>
        <hr className="hr"/>
        <ul>Rating:</ul>
        <p className="miles hiker-data">{newRating}/5</p>
        <hr className="hr"/>
        <ul>Notes:</ul>
        <p className="hiker-data summits" onDoubleClick={() => this.toggleEdit()}>{newNotes}</p>     
        
        <button className="btn delete-btn" onClick={() => this.props.delete(this.props.data.id)}>
          Delete
        </button>
        
      </div>
      
    )
  }
}
export default MountainDisplay
