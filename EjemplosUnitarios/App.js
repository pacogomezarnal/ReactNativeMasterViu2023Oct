import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet } from 'react-native';
//Importacion componentes
import CompView from './components/CompView'
import FlexEjemplo from './components/FlexEjemplo'
import ComImagen from './components/ComImagen'

//ENUM de los ejemplos unitarios
const EJEMPLOS={
  COMPVIEW:0,
  FLEX:1,
  IMAGEN:2
}
const ejemplo=EJEMPLOS.IMAGEN

export default function App() {
  //Carga a partir de la seleccion
  let appCargar
  if(ejemplo==EJEMPLOS.COMPVIEW) appCargar=<CompView/>
  else if(ejemplo==EJEMPLOS.FLEX) appCargar=<FlexEjemplo/> 
  else if(ejemplo==EJEMPLOS.IMAGEN) appCargar=<ComImagen/> 
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

