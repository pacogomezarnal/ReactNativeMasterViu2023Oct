/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FlatCard from './components/FlatCard';


function App(): JSX.Element {



  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <FlatCard/>
        <FlatCard/><FlatCard/><FlatCard/><FlatCard/><FlatCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
