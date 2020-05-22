import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import HikerDisplay from './components/HikerDisplay'
import AddHiker from './components/AddHiker'

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
  }

  addHiker(name, miles, summits){
    const body = {name, miles, summits}
    axios.post('/api/hikers', body)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
  }

  editHiker(id, name, miles, summits){
    const body = {id, name, miles, summits}
    axios.put(`/api/hikers/${id}`)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
  }

  deleteHiker(id){
    axios.delete(`/api/hikers/${id}`)
    .then(res => {
      this.setState({
        hiker: res.data
      })
    })
  }



  render(){
    return (
      <div className="App">
        <h1>app.js</h1>
        <Header />
        <HikerDisplay  />
        <AddHiker/>
      </div>
    );
  }
}

export default App;
