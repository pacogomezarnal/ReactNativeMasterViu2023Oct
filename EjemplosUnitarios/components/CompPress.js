import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function CompPress () {
  const [timesPressed, setTimesPressed] = useState(0);
  const [timesLongPressed, setLongTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  let textLongLog = '';
  if (timesLongPressed > 1) {
    textLongLog = timesLongPressed + 'x onPressLong';
  } else if (timesLongPressed > 0) {
    textLongLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(timesPressed+1);
        }}
        onLongPress={() => {
            setLongTimesPressed(timesLongPressed+1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {/*{children}*/}
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
      <View style={styles.logBox}>
        <Text>{textLongLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
