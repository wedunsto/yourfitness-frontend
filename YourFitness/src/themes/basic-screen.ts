import { StyleSheet } from "react-native";

const BasicStyles = StyleSheet.create({
    screen: {
        backgroundColor: "#000000",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 32,
    },
    body: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#32CD32",
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "center"
    },
    buttonText: {
        color: "#FFFFFF"
    }
})

export default BasicStyles;