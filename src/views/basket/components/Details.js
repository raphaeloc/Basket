import React from "react"
import { View, Image, StyleSheet } from "react-native"
import MontserratText from "../../../components/MontserratText"
import logo from '../../../../assets/logo.png'

export default function Details() {
    return <>
        <MontserratText style={styles.name}>Basket of vegetables</MontserratText>

        <View style={styles.farm}>
            <Image style={styles.farmImage} source={logo} />
            <MontserratText style={styles.farmName}>Raphael Chagas Farm</MontserratText>
        </View>

        <MontserratText style={styles.description}>
            A basket with carefully selected products from the farm straight to your kitchen
        </MontserratText>
        <MontserratText style={styles.price}>R$40,00</MontserratText>
    </>
}

const styles = StyleSheet.create({
    name: {
        color: '#464646', 
        fontSize:26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
        alignItems: 'center'
    },
    farmImage: {
        width: 32,
        height: 32
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})