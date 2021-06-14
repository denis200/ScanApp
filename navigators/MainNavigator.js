import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/HomePage';
import LoginScreen from '../screens/LoginPage';
import RegScreen from '../screens/RegPage';
import SetCodeScreen from '../screens/SetCodePage';
import CodeAndProductPagesNav from './CodeAndProductPagesNav';

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Вход" component={LoginScreen} />

        <View>не вафли</View>

        <Stack.Screen name="Зарегистрироваться" component={RegScreen} />
        <Stack.Screen name="SetCode" component={SetCodeScreen} />
        <Stack.Screen name="CodeAndProductPagesNav" component={CodeAndProductPagesNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
