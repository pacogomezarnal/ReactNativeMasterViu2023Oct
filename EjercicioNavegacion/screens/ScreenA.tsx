import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ScreenA({ navigation,route }) {
[alumno,setAlumno]=useState(
    {
        id:23,
        nombre:'Paco',
        apellidos:'Gomez',
        notaMedia:8
    }
) 

useEffect(() => {
    console.log("ScreenA se ha montado")
    if (route.params?.notaMedia) {
        const  alumnoCopia={...alumno}  
        alumnoCopia.notaMedia=route.params?.notaMedia
        setAlumno(alumnoCopia)
        console.log("Se ha actualizado la notaMedia")
    }
}, [route.params?.notaMedia]);

  console.log("ScreenA creada");
        
  return (
    <View style={styles.container}>
      <Text style={styles.fuente}>ScreenA</Text>
      <Text style={styles.fuente}>Nota media del alumno: {alumno.notaMedia}</Text>
      <Button
        title="Ir a VENTANA B"
        onPress={() => navigation.navigate(
            'ScreenB',
            alumno
        )}
      />
    <TouchableOpacity
        onPress={() => {
          navigation.navigate({name: 'TabScreen'});
          }}
        >
                <Text style={styles.socialLinks}>TAB SCREEN</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6495ed',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    boton:{
      backgroundColor:'#483d8b',
      marginTop:5,
      padding:5
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