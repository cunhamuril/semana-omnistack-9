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
}, {
  // configurações do mongoose
  toJSON: {
    virtuals: true, // toda vez que o schema for montado, eu quero que calcule os virtuals junto
  },
})

// Função para carregamento de imagem
SpotSchema.virtual('thumbnail_url').get(function () {
  // esta função não poderá ser escrita no formato de Arroy Function
  return `http://192.168.0.102:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema)