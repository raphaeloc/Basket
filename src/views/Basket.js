import React from "react"
import { StatusBar, StyleSheet, Image, Dimensions, Text, View, SafeAreaView } from 'react-native'
import MontserratText from '../components/MontserratText' 

import top from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Basket() {
    return <>
        <MontserratText style={styles.title}>Details of basket</MontserratText>
        <Image source={top} style={styles.top} />

        <View style={styles.basket}>
            <MontserratText style={styles.name}>Basket of vegetables</MontserratText>

            <View style={styles.farm}>
            <Image style={styles.farmImage} source={logo} />
            <MontserratText style={styles.farmName}>Raphael Chagas Farm</MontserratText>
            </View>

            <MontserratText style={styles.description}>
                A basket with carefully selected products from the farm straight to your kitchen
            </MontserratText>
            <MontserratText style={styles.price}>R$40,00</MontserratText>
        </View>
    </>
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'black',
        fontWeight: 'bold',
        padding: 16 
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
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