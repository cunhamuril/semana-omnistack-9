import React, { useState, useEffect } from 'react'
import {
  SafeAreaView, // ao contrário da View normal, ele não vai ocupar a área da statusbar
  ScrollView,
  Image,
  StyleSheet,
  AsyncStorage,
  Platform
} from "react-native";

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List() {
  const [techs, setTechs] = useState([])

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