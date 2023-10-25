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
import FlatCardScroll from './components/FlatCardScroll';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';
import ActionCard from './components/ActionCard';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <FlatCardScroll/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
