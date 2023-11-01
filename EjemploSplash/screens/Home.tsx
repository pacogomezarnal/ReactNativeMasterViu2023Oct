import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View  style={styles.container}>
      <Text style={styles.fuente}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff1493',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
    }
})