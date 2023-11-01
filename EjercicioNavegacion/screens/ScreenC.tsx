import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function ScreenC({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.fuente}>ScreenC</Text>
      <Button title="Ir al incio" onPress={() => navigation.navigate('ScreenA')} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8a2be2',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    socialLinks: {
      fontSize: 16,
      color: '#fff',
      backgroundColor: '#ff8c00',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6,
      marginTop:10
      
  }
})