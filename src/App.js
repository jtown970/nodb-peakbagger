import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import AddHiker from './components/AddHiker'
import HandleHikers from './components/HandleHikers'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hiker: []
    }
    this.addHiker = this.addHiker.bind(this)
    this.editHiker = this.editHiker.bind(this)
    this.deleteHiker = this.deleteHiker.bind(this)
  }

  componentDidMount(){
    axios.get('/api/hikers')
    .then(res => {
      this.setState({
        hiker: res.data
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

  addPeak(peak, mountain, elevation, date){
    const body = {peak, mountain, elevation, date}
    axios.post('/api/hiker', body)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
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
  
  render(){
    return (
      <div className="App">
        <Header />
        <HandleHikers 
        hiker={this.state.hiker} 
        delete={this.deleteHiker}
        editHiker={this.editHiker}/>
        <AddHiker addHiker={this.addHiker} />

      </div>
    );
  }
}

export default App;
