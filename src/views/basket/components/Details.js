import React from "react"
import { View, Image, StyleSheet } from "react-native"
import MontserratText from "../../../components/MontserratText"
import logo from '../../../../assets/logo.png'

export default function Details({ 
    name,
    farmLogo,
    farmName,
    description,
    price 
}) {
    return <>
        <MontserratText style={styles.name}>{name}</MontserratText>

        <View style={styles.farm}>
            <Image style={styles.farmImage} source={farmLogo} />
            <MontserratText style={styles.farmName}>{farmName}</MontserratText>
        </View>

        <MontserratText style={styles.description}>{description}</MontserratText>
        <MontserratText style={styles.price}>{price}</MontserratText>
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