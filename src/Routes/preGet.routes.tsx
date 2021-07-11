import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../Screens/Home'

const { Navigator, Screen } = createStackNavigator()

import { theme } from '../Global/Styles/theme'

export function PreGetRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}