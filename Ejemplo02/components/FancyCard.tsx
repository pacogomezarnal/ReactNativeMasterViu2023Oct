import { SafeAreaView,Text,View,StyleSheet, Image } from "react-native";


export default function FancyCard(): JSX.Element {
    return (
      <View>
        <Text style={styles.tituloTexto}>Tending place to visit</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
                source={{
                    uri: 'https://mymodernmet.com/wp/wp-content/uploads/2020/09/Ciudad-Artes-Ciencias-6.jpg'
                }}
                style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Ciudad Artes y las Ciencias</Text>
                <Text style={styles.cardLabel}>Valencia, España</Text>
                <Text style={styles.cardDescription}>La Ciutat de les Arts i les Ciències, Ciutat de les Ciències en el projecte inicial, és un complex arquitectònic, cultural i d'entreteniment de la ciutat de València. Així mateix és el nom d'un barri de València i forma part del districte de Quatre Carreres.</Text>
                <Text style={styles.cardFooter}>Hace 12 min</Text>
            </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    tituloTexto:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
        
    },
    cardElevated: {
        backgroundColor: '#FFFFFF'
        
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
        
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    }
})