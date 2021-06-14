import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GoodsScreen from "./../screens/GoodsPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

export default function BottomNavScreen() {
	return (
		<Tab.Navigator
			initialRouteName='Корзина'
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Профиль") {
						iconName = focused
							? "person-circle-outline"
							: "person-outline";
					} else if (route.name === "Корзина") {
						iconName = focused ? "cart-outline" : "cart-outline";
					} else if (route.name === "История покупок") {
						iconName = focused
							? "basket-outline"
							: "basket-outline";
					} else if (route.name === "Сканировать") {
						iconName = focused
							? "qr-code-outline"
							: "qr-code-outline";
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
		>
			<Tab.Screen name='Профиль' component={GoodsScreen} />
			<Tab.Screen name='Сканировать' component={GoodsScreen} />
			<Tab.Screen name='Корзина' component={GoodsScreen} />
			<Tab.Screen name='История покупок' component={GoodsScreen} />
		</Tab.Navigator>
	);
}
