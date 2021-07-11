import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 58,
        borderRadius: 8,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        color: theme.colors.secondary80,
        textAlign: 'center',
        fontFamily: theme.fonts.title
    }
})