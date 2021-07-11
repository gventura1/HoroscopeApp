import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
    container: {

    },
    sign: {
        fontSize: 32,
        fontFamily: theme.fonts.subtitle,
        textAlign: 'center',
        marginTop: 80
    },
    date: {

    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        fontFamily: theme.fonts.title,
        paddingHorizontal: 24
    },
    icon: {
        paddingTop: 5,
        marginLeft: 320
    }
})