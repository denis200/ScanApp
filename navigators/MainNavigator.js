import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./../screens/HomePage";
import LoginScreen from "../screens/LoginPage";

const Stack = createStackNavigator();

export default function MainNav() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Login' component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
