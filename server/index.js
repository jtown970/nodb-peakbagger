const express = require('express')
const app = express()
const  SERVER_PORT = 4321
const hikersCtrl = require('./controllers/MyHikers')

app.use(express.json())

app.get(`/api/hikers`, hikersCtrl.getHikers)
app.post(`/api/hikers`, hikersCtrl.addHiker)
app.put(`/api/hiker/:hiker_id`, hikersCtrl.addPeak)
app.put(`/api/hikers/:hiker_id`, hikersCtrl.editHiker)
app.delete(`/api/hikers/:hiker_id`, hikersCtrl.deleteHiker)

app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`))