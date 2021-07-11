import { StyleSheet } from "react-native";
import { theme } from "../../Global/Styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        backgroundColor: theme.colors.overlay,
        flex: 1
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary90,
        alignSelf: 'center',
        marginTop: 13,

    }
})