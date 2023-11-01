import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

export default function CompTextInput () {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.texto}>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text style={styles.texto}>{number}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  texto:{
    margin:12,
    padding:5,
    backgroundColor:'#cacaca'
  }
});
