import React, { useState, useEffect } from 'react'
import socketio from 'socket.io-client'
import {
  Alert,
  SafeAreaView, // ao contrário da View normal, ele não vai ocupar a área da statusbar
  ScrollView,
  Image,
  StyleSheet,
  AsyncStorage,
  Platform
} from "react-native";

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List({ navigation }) {
  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.0.102:3333', {
        query: { user_id }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi
        ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
      })
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim())

      setTechs(techsArray)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0, // tive que fazer uma configuração aqui:
    // o SafeAreaView só funciona para iOS. Se a plataforma que estiver utilizando for Android
    // ele vai dar uma marginTop de 25px.    
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
  },
})