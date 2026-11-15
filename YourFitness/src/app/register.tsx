import { View, Text, StyleSheet } from 'react-native';
import Header from '@/components/header';
import BasicStyles from '@/themes/basic-screen';
import { useRouter, useLocalSearchParams } from 'expo-router';

/**
 * Captures the username and password
 * and store their credentials in the users table
 */

const register = () => {
    const { username } = useLocalSearchParams<{ username: string}>();
    
    return (
        <View style={BasicStyles.screen}>
            <Header />
            <Text style={BasicStyles.form}>{ username }</Text>
        </View>
    );
};

export default register;