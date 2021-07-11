import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight() + 18,
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        justifyContent: 'center',
        marginTop: 24
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: theme.colors.overlay,
        fontFamily: theme.fonts.title
    },
    date: {
        marginTop: 24,
        paddingLeft: 24,
        fontFamily: theme.fonts.subtitle
    },
    button: {
        alignItems: 'center',
        marginTop: 48
    }
})