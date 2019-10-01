const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pc8aa.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true, // configuração padrão do mongoose
  useUnifiedTopology: true, // configuração padrão do mongoose
})

app.use(express.json())
app.use(routes)

const port = 3333
app.listen(port, () => console.log(`Backend executando na porta ${port}`))