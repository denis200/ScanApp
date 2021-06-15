import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfilePage';
import SettingScreen from '../screens/SettingPage';

const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName="Профиль">
      <ProfileStack.Screen name="Профиль" component={ProfileScreen} />
      <ProfileStack.Screen name="Настройки" component={SettingScreen} />
      {/* <ProfileStack.Screen name="Наши адреса" component={ProfileScreen} /> */}
    </ProfileStack.Navigator>
  );
}