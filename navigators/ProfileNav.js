import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfilePage";

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
	return (
		<ProfileStack.Navigator initialRouteName='Профиль'>
			<ProfileStack.Screen name='Профиль' component={ProfileScreen} />
		</ProfileStack.Navigator>
	);
}
