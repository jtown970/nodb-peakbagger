const mountains = require('../../mountains.json')
let id = mountains[mountains.length -1].id +1

module.exports = {
  getMountains: (req, res) => {
    res.status(200).send(mountains)
  },
  addMountains: (req, res) => {
    const {mountain, elevation, gain, rang, miles,date_Hiked, rating, notes} = req.body

    const newMountain = {id, mountain, elevation, gain, rang, miles, date_Hiked, rating, notes}
    mountains.push(newMountain)

    id++

    res.status(200).send(mountains)
  },
  editMountains: (req, res) => {
    const {mountain_id} = req.params
    const {newNotes} = req.body

    const index = mountains.findIndex(elem => elem.id === +mountain_id)
    
    if(index === -1){
      return res.status(404).send('mountain not found')
    }

    mountains[index].notes = newNotes

  },
  deleteMountains: (req, res) => {
    const {mountain_id} = req.params
    
    const index = mountains.findIndex(elem => elem.id === +mountain_id)

    if(index === -1){
      return res.status(404).send('mountain not found')
    }
    mountains.splice(index, 1)

    res.status(200).send(mountains)

  }
}