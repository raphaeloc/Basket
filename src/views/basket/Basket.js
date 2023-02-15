import React from "react"
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from "./components/Header"
import Details from "./components/Details"
import Items from "./components/Items"

export default function Basket({ header, details, items }) {
    return <ScrollView>
        <Header {...header}/>

        <View style={styles.basket}>
            <Details {...details} />
            <Items {...items} />
        </View >
    </ScrollView>
}

const styles = StyleSheet.create({
    
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})