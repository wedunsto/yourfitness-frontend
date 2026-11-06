import { Stack } from "expo-router";

/**
 * Define the routes and pages that are on the stack with navigation
 */

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "LandingPage", headerShown: false}} />
            <Stack.Screen name="user-exists" options={{ title: "User Exists", headerShown: false}} />
        </Stack>
    )
}