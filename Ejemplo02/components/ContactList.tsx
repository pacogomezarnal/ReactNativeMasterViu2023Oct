import { ScrollView, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import Contact from './Contact'

/* */
const datosContacto =[
    {
        id: 1,
        name: 'Paco Gomez',
        status: 'Profesor VIU',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    },
    {
        id: 2,
        name: 'Pakito Gomez',
        status: 'Profesor Mastermind',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    },
    {
        id: 3,
        name: 'Pakuchi Gomez',
        status: 'Youtuber aficionado',
        imageUrl: 'https://avatars.githubusercontent.com/u/6039788?s=96&v=4',
    },
]

export default function ContactList(): JSX.Element  {
  return (
    <View>
        <Text style={styles.tituloTexto}>Contact List</Text>
        <ScrollView
            style={styles.container}
            scrollEnabled={false}
        >   
            {datosContacto.map( ({id,name,status,imageUrl}) =>
                (
                    <Contact key={id} imageUrl={imageUrl} name={name} status={status}/>
                )
            )}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})