import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Pressable,
} from "react-native";

import { useState } from 'react';

// Shared style sheet with reusable styles
import BasicStyles from "@/themes/basic-screen";

import Header from "@/components/header";

/**
 * When a use begins the authorization process,
 * YourFitness starts by confirming if the user exists or not
 */

const UserExists = () => {
    // State management for the user's username
    const [username, setUsername] = useState("");

    // Regular expression checking if the username is between 5 and 15 characters and has no special characters
    const usernameRegex: RegExp = /^[a-zA-Z0-9]{5,15}$/;

    // Track username validity
    const isValidUsername: boolean = usernameRegex.test(username);

    return(
        <View style={BasicStyles.screen}>
            <Header />
            <View style={BasicStyles.body}>
                <View>
                    <TextInput
                        style={[styles.form, !isValidUsername ? styles.invalidUsername : styles.validUsername]}
                        placeholder="Enter Username"
                        placeholderTextColor="#FFFFFF"
                        value={username}
                        onChangeText={setUsername}
                        maxLength={15}/>
                    { 
                        !isValidUsername
                        && 
                        <Text style={ styles.invalidUsername}>
                            Username must be between 5 and 15 characters  long and contain no special characters
                        </Text>
                    }
                </View>
                <Pressable
                    disabled={!isValidUsername}
                    style={BasicStyles.button}>
                    <Text style={BasicStyles.buttonText}>Register / Login</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 16,
        paddingHorizontal: 24,
        borderWidth: 2,
        borderColor: "#FFFFFF",
        borderRadius: 8
    },
    invalidUsername: {
        color: "#FF0000"
    },
    validUsername: {
        color: "#FFFFFF"
    }
})

export default UserExists;