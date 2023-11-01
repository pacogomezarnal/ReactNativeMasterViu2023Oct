import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

export default function Splash({navigation}) {

    //https://developer.mozilla.org/es/docs/Web/API/setTimeout
    useEffect(()=>{
        setTimeout(()=>{
            //navigate y despues lanzar la pregunta
            navigation.replace("Home")
        },2000)
    },[]);

  return (
    <View style={styles.container}>
        <Animatable.Text style={styles.fuente} duration={2000} animation="slideInDown">
            Splash
        </Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fuente:{
        color:"white",
        fontSize: 36,
        fontWeight: '800',
    }
})