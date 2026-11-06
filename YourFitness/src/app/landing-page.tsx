import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
 } from 'react-native';

/**
 * First page a user sees when they open YourFitness
 */
export const LandingPage = () => {
    const logoPath = "../assets/images/yourzone-logo-dark.png";
    const placeholder = "../assets/images/placeholder.png";

    return(
        <View style={styles.screen}>
            <Image
                style={styles.logo}
                source={require(logoPath)} />
            <Text style={styles.header}>YourFitness</Text>
            <View style={styles.body}>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Build strength. Build Budgets.</Text>
                    <Text style={styles.detailsText}>Find a rhythm that makes room for both.</Text>
                    <Image
                        style={styles.placeholder}
                        source={require(placeholder)} />
                </View>
                <Pressable style={styles.getStartedButton}>
                    <Text style={styles.whiteText}>Get Started</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#000000",
        flex: 1,
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
    body: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    details: {
        alignItems: "center",
        gap: 8,
        marginVertical: 40
    },
    detailsText: {
        color: "#FFFFFF",
        fontSize: 11
    },
    placeholder: {
        resizeMode: "contain",
        height: 250,
        width: 250,
    },
    getStartedButton: {
        backgroundColor: "#32CD32",
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "center"
    },
    whiteText: {
        color: "#FFFFFF"
    }
});