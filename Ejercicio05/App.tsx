/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import { Formik } from 'formik';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';
import * as Yup from 'yup'
import BouncyCheckbox from "react-native-bouncy-checkbox";


//Esquema de validacion con Yup
const PasswordSchema=Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,'Debería ser como mínimo valor 4')
  .max(16,'Debería ser como mínimo valor 4')
  .required('PasswordLenght es obligatorio')
})

function App(): JSX.Element {

  //Variables necesarias para generar el password
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  //Estado de las variables para incluir textos
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)


  //Reset
  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
    console.log("Reseteo todos los valores")
  }

  //Funcion generadora del password
  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength )

    setPassword(passwordResult)
    setIsPassGenerated(true)

  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }


  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            {/* COMPONENTE FORMIK */}

            <Formik
              initialValues={{ passwordLength: '' }}
              validationSchema={PasswordSchema}
              onSubmit={(values) => {
                generatePasswordString(Number(values.passwordLength))
                console.log(values)
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                    <View style={styles.inputWrapper}>
                      <View style={styles.inputColumn}>
                        <Text style={styles.heading}>Longitud Password</Text>
                      </View>
                    </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder='0'
                      keyboardType='numeric'
                    />
                    <View style={styles.inputWrapper}>
                      <View style={styles.inputColumn}>
                        <Text style={styles.heading}>Incluir</Text>
                      </View>
                    </View>
                    {/* CHECKERS */}
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Incluye minusculas</Text>
                        <BouncyCheckbox
                                disableBuiltInState
                                isChecked={lowerCase}
                                onPress={()=>setLowerCase(!lowerCase)}
                                fillColor="#29AB87"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Incluye mayúsculas</Text>
                      <BouncyCheckbox
                        disableBuiltInState
                        isChecked={upperCase}
                        onPress={() => setupperCase(!upperCase)}
                        fillColor="#FED85D"
                      />
                    </View>                    
                    <View style={styles.inputWrapper}>
                      <Text style={styles.heading}>Incluye números</Text>
                      <BouncyCheckbox
                        disableBuiltInState
                        isChecked={numbers}
                        onPress={() => setNumbers(!numbers)}
                        fillColor="#C9A0DC"
                      />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.heading}>Incluye símbolos</Text>
                        <BouncyCheckbox
                          disableBuiltInState
                          isChecked={symbols}
                          onPress={() => setSymbols(!symbols)}
                          fillColor="#FC80A5"
                        />
                    </View>

                    {/* BOTONES */}

                    <View style={styles.formActions}>
                      <TouchableOpacity
                        style={styles.primaryBtn}
                        disabled={!isValid}
                        onPress={handleSubmit}
                      >
                        <Text style={styles.primaryBtnTxt}>Generar Password</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.secondaryBtn}
                        onPress={ () => {
                          handleReset();
                          resetPasswordState()
                        }}
                        >
                          <Text style={styles.secondaryBtnTxt}>Reset</Text>
                      </TouchableOpacity>
                    </View>
                    {
                      isPassGenerated ? (
                        <View style={[styles.card, styles.cardElevated]}>
                          <Text style={styles.subTitle}>Resultado</Text>
                          <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
                          </View>
                      ):null
                    }

                </>
              )}
            </Formik>


            {/* COMPONENTE FORMIK */}

        </View>
      </SafeAreaView>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});

export default App;
