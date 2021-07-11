import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dashboard } from '../Screens/Dashboard'

const { Navigator, Screen } = createStackNavigator()

import { theme } from '../Global/Styles/theme'

export function AfterGetRoutes() {
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
                name="Dashboard"
                component={Dashboard}
            />

        </Navigator>
    )
}