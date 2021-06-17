<<<<<<< HEAD
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfilePage';
import SettingScreen from '../screens/SettingPage';
import CommunicationWithDevelopersScreen from '../screens/ProfilePageFolder/CommunicationWithDevelopersPage';
=======
import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import ProfileScreen from "../screens/ProfilePage"
import SettingScreen from "../screens/SettingPage"
import AdressScreen from "../screens/AdressMapPage"
>>>>>>> 3d03585c63a6ce17519cf91b52218322d9c3ec58

const ProfileStack = createStackNavigator()

export default function ProfileStackScreen() {
<<<<<<< HEAD
  return (
    <ProfileStack.Navigator initialRouteName="Профиль">
      <ProfileStack.Screen name="Профиль" component={ProfileScreen} />
      <ProfileStack.Screen name="Настройки" component={SettingScreen} />
      <ProfileStack.Screen name="FeedBack" component={CommunicationWithDevelopersScreen} />
    </ProfileStack.Navigator>
  );
=======
	return (
		<ProfileStack.Navigator initialRouteName="Профиль">
			<ProfileStack.Screen name="Профиль" component={ProfileScreen} />
			<ProfileStack.Screen name="Настройки" component={SettingScreen} />
			<ProfileStack.Screen name="Адреса" component={AdressScreen} />

			{/* <ProfileStack.Screen name="Наши адреса" component={ProfileScreen} /> */}
		</ProfileStack.Navigator>
	)
>>>>>>> 3d03585c63a6ce17519cf91b52218322d9c3ec58
}
