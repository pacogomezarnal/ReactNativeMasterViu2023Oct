import { StyleSheet,Text, View } from 'react-native';

export default function FlexEjemplo() {

    return(
        <View style={styles.container}>
            <View style={styles.vista01}></View>
            <View style={styles.containerOrange}>
                <View style={styles.box}><Text>1</Text></View>
                <View style={styles.box}><Text>2</Text></View>
                <View style={styles.box}><Text>3</Text></View>
                <View style={styles.box}><Text>4</Text></View>
            </View>
            <View style={styles.containerGreen}>
                <View style={styles.cajaPorcentaje}><Text>1</Text></View>
                <View style={styles.cajaPorcentaje}><Text>2</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    vista01:{
        flex:1,
        backgroundColor:'red'
    },
    containerOrange: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'darkorange',
        justifyContent: 'flex-start',
        padding:5,
        flexWrap:'wrap'
    },
    box:{
        width:100,
        height:100,
        backgroundColor: 'gray',
        margin:2
    },
    containerGreen:{
        flex: 2,
        backgroundColor:'green'
    },
    cajaPorcentaje:{
        width:'50%',
        height: '35%',
        margin:2,
        backgroundColor: 'gray',
    }
  });