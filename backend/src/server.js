const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pc8aa.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true, // configuração padrão do mongoose
  useUnifiedTopology: true, // configuração padrão do mongoose
})

// app.use(cors({ origin: 'http://localhost:3333' })) 
// desse modo apenas esta URL informada vai poder utilizar a API do backend

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
// responsável por carregar o caminho das imagens
app.use(routes)

const port = 3333
app.listen(port, () => console.log(`Backend executando na porta ${port}`))