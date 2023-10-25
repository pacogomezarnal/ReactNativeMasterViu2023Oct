import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet } from 'react-native';
//Importacion componentes
import CompView from './components/CompView'
import FlexEjemplo from './components/FlexEjemplo'
import ComImagen from './components/ComImagen'
import CompScrollView from './components/CompScrollView'
import CompTouch from './components/CompTouch'

//ENUM de los ejemplos unitarios
const EJEMPLOS={
  COMPVIEW:0,
  FLEX:1,
  IMAGEN:2,
  SCROLLVIEW:3,
  COMPTOUCH:4,
}
const ejemplo=EJEMPLOS.COMPTOUCH

export default function App() {
  //Carga a partir de la seleccion
  let appCargar
  if(ejemplo==EJEMPLOS.COMPVIEW) appCargar=<CompView/>
  else if(ejemplo==EJEMPLOS.FLEX) appCargar=<FlexEjemplo/> 
  else if(ejemplo==EJEMPLOS.IMAGEN) appCargar=<ComImagen/>
  else if (ejemplo==EJEMPLOS.SCROLLVIEW) appCargar=<CompScrollView/>
  else if (ejemplo==EJEMPLOS.COMPTOUCH) appCargar=<CompTouch/>
  //JSX.Element
  return (
    <View style={styles.container}>
      {appCargar}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch ',
    justifyContent: 'center',
  },
});

