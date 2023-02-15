import React from "react"
import { Dimensions, Image, StyleSheet } from "react-native"
import headerImage from '../../../../assets/topo.png'

import MontserratText from '../../../components/MontserratText'

const width = Dimensions.get('screen').width

export default function Header({ title }) {
    return <>
        <MontserratText style={styles.title}>{title}</MontserratText>
        <Image source={headerImage} style={styles.headerImage} />
    </>
}

const styles = StyleSheet.create({
    headerImage: {
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
})