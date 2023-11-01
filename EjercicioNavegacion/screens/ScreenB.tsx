import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ScreenB({ route,navigation }) {
  //Params de alumno
  const{id,nombre,apellidos,notaMedia}=route.params

  return (
    <View style={styles.container}>
      <Text style={styles.fuente}>ScreenB</Text>
      <Text style={styles.fuente}>Id: {id}</Text>
      <Text style={styles.fuente}>Nombre: {nombre}</Text>
      <Text style={styles.fuente}>Apellidos: {apellidos}</Text>
      <Text style={styles.fuente}>Notamedia : {notaMedia}</Text>
      <Button 
        title="Ir a ventana C"
        onPress={() => navigation.navigate('ScreenC')}
      />
      <Button 
      title='Subir nota media'
        onPress={() => 
            navigation.setParams({
                notaMedia: 9,
        })
        }
      /> 
    <TouchableOpacity
        onPress={() => {
          // Devolvemos la nota media actualizada
          navigation.navigate({
            name: 'ScreenA',
            params: { notaMedia: notaMedia },
            merge: true,
          });
          }}
        >
          <Text style={styles.socialLinks}>Devolver nota actualizada</Text>
      </TouchableOpacity>     
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