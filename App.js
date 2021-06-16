import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useState } from "react";
import MainNav from "./navigators/MainNavigator";
import BottomNavScreen from "./navigators/BottomNav";
import { AuthContex } from "./components/contex";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [token, setToken] = useState(null);

	const authContex = React.useMemo(
		() => ({
			signIn: () => {
				setToken("qwer");
				setIsLoading(false);
			},
			signOut: () => {
				setToken(null);
				setIsLoading(false);
			},
			signUp: () => {
				setToken("qwer");
				setIsLoading(false);
			},
		}),
		[]
	);

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator color='#00aa00' size='large' />
			</View>
		);
	}
	return (
		<AuthContex.Provider value={authContex}>
			<NavigationContainer>
				{token !== null ? <BottomNavScreen /> : <MainNav />}
			</NavigationContainer>
		</AuthContex.Provider>
	);
}
