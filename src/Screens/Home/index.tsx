import React, { useContext } from 'react'
import { Image, View, Text } from 'react-native'

import Illustration from '../../assets/illustration.png'

import { Button } from '../../Components/Button'

import HoroscopeContext from '../../Contexts/AppContext'

import { styles } from './style'

export function Home() {
    const { getSign } = useContext(HoroscopeContext)

    function handleGetHoroscope() {
        getSign()
    }

    return (
        <View style={styles.container}>
            <Image source={Illustration}
                style={styles.image}
                resizeMode='contain'
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Consulte seu Horóscopo{'\n'}a qualquer hora e {'\n'}
                    qualquer lugar
                </Text>
                <View style={styles.button}>
                    <Button
                        title="Consultar"
                        onPress={handleGetHoroscope}
                    />
                </View>
            </View>
        </ View>
    )
}