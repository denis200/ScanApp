import GoodsScreen from "./../screens/GoodsPage"
import React from "react"
import PayScreen from "../screens/PayPage"
import {createStackNavigator} from "@react-navigation/stack"
import CreditCardScreen from "../screens/CreditCardPage"

const ProfileStack = createStackNavigator()

export default function GoodsStackScreen() {
	return (
		<ProfileStack.Navigator screenOptions={{headerShown: false}}>
			<ProfileStack.Screen name="Корзина" component={GoodsScreen} />
			<ProfileStack.Screen name="Оплата" component={PayScreen} />
			<ProfileStack.Screen name="Карта" component={CreditCardScreen} />
		</ProfileStack.Navigator>
	)
}
