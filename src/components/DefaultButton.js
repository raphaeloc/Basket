import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

import MontserratText from './MontserratText'

export default function DefaultButton({ buttonTitle }) {
    return <>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <MontserratText style={styles.buttonText}>{buttonTitle}</MontserratText>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})