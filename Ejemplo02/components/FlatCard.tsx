import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard(): JSX.Element  {
  return (
    <View>
        <Text style={styles.tituloTexto}>
            Flat Cards
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 96,
        fontWeight: 'bold',
        paddingHorizontal: 8
    }
})