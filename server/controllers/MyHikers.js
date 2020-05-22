const hikers = require('../../hikers.json')
let id = hikers[hikers.length - 1].id + 1

module.exports = {

  getHikers: (req, res) => {
    res.status(200).send(hikers)
  },

  addHiker: (req, res) => {
    const {first_name, last_name, miles, summits} = req.body

    const newHiker = {id, first_name, last_name, miles, summits}
    hikers.push(newHiker)

    id++

    res.status(200).send(hikers)
  },



  editHiker: (req,res) => {
    const {hiker_id} = req.params
    const {first_name, last_name, miles, summit} = req.body

    const index = hikers.findIndex(elem => elem.id === +hiker_id)

    if(index === -1){
      return res.status(404).send('Hiker not found')
    }

    const updatedHiker = {
      id: +hiker_id,
      first_name: first_name || hikers[index].first_name,
      last_name: last_name || hikers[index].last_name,
      miles: miles || hikers[index].miles,
      summit: summit || hikers[index].summits
    }

    hikers[index] = updatedHiker

    res.status(200).send(hikers)
  },

  deleteHiker: (req, res) => {
    const {hiker_id} = req.params

    const index = hikers.findIndex(elem => elem.id === +hiker_id)

    if(index === -1){
      return res.status(404).send('Hiker not found')
    }

    hikers.splice(index, 1)

    res.status(200).send(hikers)

  }
}