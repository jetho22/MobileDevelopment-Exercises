import { View, Image, Text, Button, StyleSheet } from "react-native";

export default function CarRentalCard() {

    function rentnow() {
        console.log("Renting car");
    }

    const imgsrc = require('./assets/batmobile.jpeg');

    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Image source={imgsrc} style={styles.carImage}/>
                <View style={styles.textContainer}>
                <Text style={styles.carModel}>
                    Jeppes Batmobile
                </Text>
                <Text style={styles.carPrice}>
                    Price: 500.000DKK
                </Text>
            </View>
        </View>
        
            <Button title="Rent Now" onPress={rentnow}></Button>
        </View>
    )

}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
        margin: 10,
        width: '90%',
        alignSelf: 'center',
    },

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    carImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    textContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
    },

    carModel: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    carPrice: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    }

});