const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socketio(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pc8aa.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true, // configuração padrão do mongoose
  useUnifiedTopology: true, // configuração padrão do mongoose
})

const connectedUsers = {}

io.on('connection', socket => {
  const { user_id } = socket.handshake.query

  connectedUsers[user_id] = socket.id
})

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

// app.use(cors({ origin: 'http://localhost:3333' })) 
// desse modo apenas esta URL informada vai poder utilizar a API do backend

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
// responsável por carregar o caminho das imagens
app.use(routes)

const port = 3333
server.listen(port, () => console.log(`Backend executando na porta ${port}`))