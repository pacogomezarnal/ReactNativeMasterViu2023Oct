/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";




function App(): JSX.Element {
  const [nombre, setnombre] = useState("");
  const [email, setEmail] = useState("");
  const [telef, settelef] = useState("");
  const [mensaje, setmensaje] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = ()=>{
    if(!nombre&&!email&&!telef&&!mensaje)
      Alert.alert("Porfa please te falta algun dato")
    //TODO
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>

          <Text style={styles.mainHeader}> Contacto React Native</Text>

          <Text style={styles.description}>
            Este es otro ejemplo centrado en los formularios
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Introduce tu nombre </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={"Paco G"}
              value={nombre}
              onChangeText={(userdata) => setnombre(userdata)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Introduce tu email </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={"paco@paco.com"}
              value={email}
              onChangeText={(userdata) => setEmail(userdata)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Introduce tu número de móvil </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={"68766876"}
              value={telef}
              onChangeText={(telef) => settelef(telef)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> ¿En qué te podemos ayudar? </Text>
            <TextInput
              style={[styles.inputStyle, styles.multilineStyle]}
              placeholder={"Descríbenos el problema"}
              value={mensaje}
              onChangeText={(msg) => setmensaje(msg)}
              numberOfLines={5}
              multiline={true}
            />
          </View>
          <View style={styles.wrapper}>
            <BouncyCheckbox
              size={25}
              fillColor="gray"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "blue" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {setAgree(!agree)}}
            />
            <Text style={styles.wrapperText}>
              He leído y estoy de acuerdo
            </Text>
          </View>
          <TouchableOpacity
              style={[
                styles.buttonStyle,
                {
                  backgroundColor: agree ? "#4630EB" : "grey",
                },
              ]}
              disabled={!agree}
              onPress={submit}>
              <Text style={styles.buttonText}> Contactanos </Text>
            </TouchableOpacity>
                   
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

//Estilos
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    color: "#000000",
  },
  multilineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});
export default App;
