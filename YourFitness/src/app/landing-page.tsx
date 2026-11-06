import { View, Text, StyleSheet, Image } from 'react-native';

export const LandingPage = () => {
    const logoPath = "../assets/images/yourzone-logo-dark.png";

    return(
        <View style={styles.screen}>
            <Image
                style={styles.logo}
                source={require(logoPath)} />
            <Text style={styles.header}>YourFitness</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#000000",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 32
    },
    logo: {
        margin: 8,
        height: 150,
        width: 150
    },
    header: {
        color: "#FFFFFF",
        fontSize: 40
    }
});