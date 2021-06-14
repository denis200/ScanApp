import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function CodeAndProductPagesNav() {
  return (
    <Stack.Navigator initialRouteName="PinCodeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PinCodeScreen" component={PinCodeScreen} />
    </Stack.Navigator>
  );
}
