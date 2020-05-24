const express = require('express')
const app = express()
const  SERVER_PORT = 4321
const hikersCtrl = require('./controllers/MyHikers')
const mountainCtrl = require('./controllers/MyMountains')

app.use(express.json())

app.get(`/api/hikers`, hikersCtrl.getHikers)
app.post(`/api/hikers`, hikersCtrl.addHiker)
app.put(`/api/hikers/:hiker_id`, hikersCtrl.editHiker)
app.delete(`/api/hikers/:hiker_id`, hikersCtrl.deleteHiker)

app.get(`/api/mountains`, mountainCtrl.getMountains)
app.post(`/api/mountains`, mountainCtrl.addMountains)
app.put(`/api/mountains/:mountain_id`, mountainCtrl.editMountains)
app.delete(`/api/mountains/:mountain_id`, mountainCtrl.deleteMountains)


app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`))