const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3000, () => {
   console.log('running on port 3000')
})

app.use(express.static('public'))

var io = socket(server)

io.on('connection', socket => {
  console.log('made socket connection')
})
