import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PinCodeScreen from "../screens/PinCodePage";
import BottomNavScreen from "./BottomNav";

const Stack = createStackNavigator();

export default function CodeAndProductPagesNav() {
	return (
		<Stack.Navigator
			initialRouteName='BottomNavScreen'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='PinCodeScreen' component={PinCodeScreen} />
			<Stack.Screen name='BottomNavScreen' component={BottomNavScreen} />
		</Stack.Navigator>
	);
}
