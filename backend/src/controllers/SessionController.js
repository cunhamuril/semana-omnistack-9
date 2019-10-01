const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email } = req.body

    let user = await User.findOne({ email }) // findOne -> buscar

    if (!user) user = await User.create({ email }) // se user não existir, criar usuário
    else res.status(400).json({ error: "Usuário já existe!" }) // senão, retorna mensagem em formato JSON

    return res.json(user)
  }
}