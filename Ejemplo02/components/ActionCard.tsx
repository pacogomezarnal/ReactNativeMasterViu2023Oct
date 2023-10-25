import { ScrollView, StyleSheet, Text, View, Image,TouchableOpacity, Linking} from 'react-native'
import React from 'react'

export default function ActionCard(): JSX.Element  {
    return(
        <View >
            <Text style={styles.headingText}> Blog </Text>
            <View style={[styles.card,styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Novedades en JavaScript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer} >
                    <Text numberOfLines={4}>
                        Como cada año, Javascript trae nuevas funciones. Este año
                        javascript trae 4 nuevas características, que están casi en
                        despliegue de producción. No estaré perdiendo mucho más tiempo y directamente
                        salte al código con ejemplos fáciles de entender.
                    </Text>
                </View>
                <View style={styles.bodyContainer} >
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://cosasdigitales.com/articulos-diseno-web/es2021-es12-novedades-de-la-ultima-version-de-javascript/')}
                    >
                        <Text style={styles.socialLinks}>Mas Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
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
    elevatedCard: {
        backgroundColor: '#E07C24',
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }
})