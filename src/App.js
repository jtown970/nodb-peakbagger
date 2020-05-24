import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import AddHiker from './components/AddHiker'
import HandleHikers from './components/HandleHikers'
import AddMountains from './components/mount/AddMountain'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hiker: [],
      mountain: []
    }
    this.addHiker = this.addHiker.bind(this)
    this.editHiker = this.editHiker.bind(this)
    this.deleteHiker = this.deleteHiker.bind(this)
    //end of hiker section

    //start of mountain section
    this.addMountains = this.addMountains.bind(this)
    this.editMountains = this.editMountains.bind(this)
    this.deleteMountains = this.deleteMountains.bind(this)
    //end of mountain section
  }

  // start of hiker section
  componentDidMount(){
    axios.get('/api/hikers')
    .then(res => {
      this.setState({
        hiker: res.data,
        mountain: res.data
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

  addHiker(first_name, last_name, miles, summits){
    const body = {first_name, last_name, miles, summits}
    axios.post('/api/hikers', body)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

  editHiker(id, newSummit){
    const body = {id, newSummit}
    axios.put(`/api/hikers/${id}`, body)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

  deleteHiker(id){
    axios.delete(`/api/hikers/${id}`).then((res) => {
      this.setState({
        hiker: res.data
      })
    })
  }
  //end of hiker section 

  //start of mountain section
  // componentDidMount(){
  //   axios.get('/api/mountains')
  //   .then(res => {
  //     this.setState({
  //       mountain: res.data
  //     })
  //   })
  //   .catch(err => window.alert('Sh*t Happens', err))
  // }

  addMountains(mountain, elevation, gain, rang, miles, date_Hiked, rating, notes){
    const body = {mountain, elevation, gain, rang, miles, date_Hiked, rating, notes}
    axios.post('/api/mountains', body)
    .then(res => {
      this.setState({
        mountain: res.data
      })
    })
  }

  editMountains(id, newNotes){
    const body = {id, newNotes}
    axios.put(`/api/mountains/${id}`, body)
    .then(res => {
      this.setState({
        mountain: res.data
      })
    })
    .catch(err => window.alert('Sh*t Happens', err))
  }

  deleteMountains(id){
    axios.delete(`/api/mountains/${id}`).then((res) => {
      this.setState({
        mountain: res.data
      })
    })
  }

  // end of mountain section
  
  render(){
    return (
      <div className="App">
        <Header />
        <HandleHikers 
        hiker={this.state.hiker} 
        delete={this.deleteHiker}
        // addPeak={this.addPeak}
        editHiker={this.editHiker}/>
        <AddHiker addHiker={this.addHiker} />
        <AddMountains addMountains={this.addMountains}/>
    

      </div>
    );
  }
}

export default App;
