import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'

import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import HoroscopeContext from '../../Contexts/AppContext';




interface horoscopes {
    title: string
    description: string
    sign: string
}

type Props = {
    Sign: horoscopes
}

export function Sing({ Sign }: Props) {

    return (
        <View style={styles.container}>
            <Feather name="x" size={24} color="black"
                style={styles.icon} />
            <Text style={styles.sign}>
                {Sign.sign}
            </Text>
            <Text style={styles.date}>

            </Text>
            <Text style={styles.description}>
                {Sign.description}
            </Text>
        </View>
    )

}