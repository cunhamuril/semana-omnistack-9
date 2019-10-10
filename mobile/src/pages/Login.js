import React, { useState, useEffect } from 'react'
import {
  View,
  AsyncStorage, // como se fosse o localStorage do navegador
  KeyboardAvoidingView, // jogar conteúdo pra cima quando aparecer o teclado
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity, // botão que fica mais claro quando toca
} from "react-native"


import api from '../services/api'

import logo from '../assets/logo.png'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List')
      }
    })
  }, [])

  async function handleSubmit() {
    const response = await api.post('/sessions', {
      email
    })

    const { _id } = response.data

    await AsyncStorage.setItem('user', _id)
    await AsyncStorage.setItem('techs', techs)

    navigation.navigate('List') // vai enviar o user para a tela List
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* 
        Na aula, o Diego adicionou uma propriedade na tag acima assim:
        enabled={Platform.OS === 'ios'} que habilita apenas se o celular for iPhone. 
        Mas eu não precisei fazer isso, pois a nova versão do Android também precisa 
        do KeyboardAvoidingView 
      */}
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch', // ocupar largura inteira do item
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#F05A5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
})