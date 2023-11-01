import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TabB() {
  return (
    <View style={styles.container}>
      <Text style={styles.fuente}>TabB</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0e68c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
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