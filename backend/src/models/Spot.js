const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, // vai pegar a referência do usuário pelo ID no banco de dados
    ref: 'User'
  }
})

module.exports = mongoose.model('Spot', SpotSchema)