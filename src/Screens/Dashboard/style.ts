import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight() + 24,
    },
    list: {
    }
})