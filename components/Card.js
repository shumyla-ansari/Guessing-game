import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card({style, ...props}) {
    return (
        <View style={{...styles.card, ...style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 15


    },
})
