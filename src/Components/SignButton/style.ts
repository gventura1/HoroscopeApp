import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 90,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary90,
        justifyContent: 'center',
        marginTop: 12,
        alignSelf: 'center'
    },
    title: {
        fontSize: 28,
        color: theme.colors.primary,
        textAlign: 'center',
        fontFamily: theme.fonts.title
    }
})