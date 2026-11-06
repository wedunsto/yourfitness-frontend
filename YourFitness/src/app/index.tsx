import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
 } from "react-native";

 import { useRouter } from "expo-router";

 import Header from "@/components/header";

 import BasicStyles from "@/themes/basic-screen";

 /**
 * First page a user sees when they open YourFitness
 */

export default function HomeScreen() {
  const router = useRouter();

  // Places the User Exists page on top of the navigation stack
  const navigateToUserExists = () => {
    router.push('/user-exists');
  }

  return (
    <View style={BasicStyles.screen}>
      <Header />
      <View style={BasicStyles.body}>
        <View style={styles.details}>
          <Text style={styles.detailsText}>Build strength. Build Budgets.</Text>
          <Text style={styles.detailsText}>Find a rhythm that makes room for both.</Text>
        </View>
        <Pressable
          style={BasicStyles.button}
          onPress={() => navigateToUserExists()}>
          <Text style={BasicStyles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    details: {
        alignItems: "center",
        gap: 8,
        marginVertical: 40
    },
    detailsText: {
        color: "#FFFFFF",
        fontSize: 11
    },
});
