import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
  const [email, setEmail] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    // previne o funcionamento padrão do submit que é enviar o usuário para outra tela

    const response = await api.post('/sessions', { email })

    const { _id } = response.data

    localStorage.setItem('user', _id)
    // localStorage é como se fosse um DB padrão do navegador

    history.push('/dashboard')
  }

  return (
    // Nova versão do React permite criar tags vazias
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">Entrar</button>
      </form>
    </>
  )
}