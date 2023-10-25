/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(): JSX.Element {
  //Nos informa del theme
  const colorcheme=useColorScheme()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texto}>Tema del usuario: {colorcheme}</Text>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  texto:{
    fontSize:36
  }
}
)
