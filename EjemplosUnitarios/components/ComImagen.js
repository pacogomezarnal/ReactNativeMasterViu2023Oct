import { StyleSheet,Image, View } from 'react-native';

export default function CompImagen() {

    return(
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
            />
            <Image
                style={styles.img}
                source={require('../assets/img03.jpg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
    img:{
        width: 300,
        height: 300,    
    }
});