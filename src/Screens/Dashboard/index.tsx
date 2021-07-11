import React, { useState, useContext } from 'react'
import { FlatList, View } from 'react-native'

import { SignButton } from '../../Components/SignButton'
import { ModalView } from '../../Components/ModalView'
import { Sing } from '../../Components/Sing'

import HoroscopeContext from '../../Contexts/AppContext'

import { styles } from './style'

type Props = {
    title: string
    description: string
    sign: string
}

export function Dashboard() {
    const { data } = useContext(HoroscopeContext)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedSign, setSelectedSign] = useState<Props>({} as Props)

    function handleCloseModal() {
        setModalIsOpen(false)
    }

    function handleOpenModal(item: any) {
        setSelectedSign(item)
        setModalIsOpen(true)
    }

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data?.horoscopes}
                    renderItem={({ item }) => (
                        <SignButton title={item.sign}
                            onPress={() => handleOpenModal(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: 69 }}
                />
            </View>
            <ModalView visible={modalIsOpen} setModalIsClose={handleCloseModal}>
                <Sing Sign={selectedSign} />
            </ModalView>
        </View>
    )
}