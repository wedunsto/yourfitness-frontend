import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

/**
 * Shared header on the landing page, user exists page, register page, and login page
 */

const Header = () => {
    return (
        <View style={styles.screen}>
            <Image
                style={styles.logo}
                source={require("../assets/images/yourzone-logo-dark.png")} />
            <Text style={styles.header}>YourFitness</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#000000",
        flexDirection: "column",
        alignItems: "center",
        padding: 32,
    },
    logo: {
        margin: 8,
        height: 150,
        width: 150
    },
    header: {
        color: "#FFFFFF",
        fontSize: 48
    },
});

export default Header;