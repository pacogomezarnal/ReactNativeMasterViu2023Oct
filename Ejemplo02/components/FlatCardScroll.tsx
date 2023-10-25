import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCardScroll(): JSX.Element  {
  return (
    <View>
        <Text style={styles.tituloTexto}>Flat Cards SCroll</Text>
        {/* CONTENEDOR DE TARJETAS */}
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardOne]}><Text>Rojo</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text>Verde</Text></View>
            <View style={[styles.card,styles.cardThree]}><Text>Azul</Text></View>
            <View style={[styles.card,styles.cardOne]}><Text>Rojo</Text></View>
            <View style={[styles.card,styles.cardTwo]}><Text>Verde</Text></View>
            <View style={[styles.card,styles.cardThree]}><Text>Azul</Text></View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 8,
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 8
    },
    cardOne: {
      backgroundColor: '#EF5354'
    },
    cardTwo: {
      backgroundColor: '#50DBB4'
    },
    cardThree: {
      backgroundColor: '#5DA3FA'
    }
})