import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function CompTouch (){
    /*Hook useState */
    const [contador,setContador]=useState(0)

    const onPress = () => {
        setContador(contador+1)
        console.log(contador)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text>Las veces que he apretado es: {contador}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Apretar aquí</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });