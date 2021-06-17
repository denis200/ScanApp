import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useState } from "react";
import MainNav from "./navigators/MainNavigator";
import BottomNavScreen from "./navigators/BottomNav";
import { AuthContex } from "./components/contex";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
	initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null,
	};

	loginReducer = (prevState, action) => {
		switch (action.type) {
			case "RETRIEVE_TOKEN":
				return {
					...prevState,
					userToken: action.token,
					isLoading: false,
				};
			case "LOGIN":
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false,
				};
			case "LOGOUT":
				return {
					...prevState,
					userName: null,
					userToken: null,
					isLoading: false,
				};
			case "REGISTER":
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false,
				};
		}
	};

	const [loginState, dispatch] = React.useReducer(
		loginReducer,
		initialLoginState
	);

	const authContex = React.useMemo(
		() => ({
			signIn: async (userName, password) => {
				let userToken;
				userToken = null;
				if (userName == "Dimon123456" && password == "Marinka228") {
					userToken = "srfsr";
					try {
						await AsyncStorage.setItem("userToken", userToken);
					} catch (e) {
						// saving error
					}
				}
				dispatch({ type: "LOGIN", id: userName, token: userToken });
			},
			signOut: async () => {
				try {
					AsyncStorage.removeItem("userToken");
				} catch (e) {
					console.log(e);
				}
				dispatch({ type: "LOGOUT" });
			},
			signUp: () => {
				setToken("qwer");
				setIsLoading(false);
			},
		}),
		[]
	);

	React.useEffect(() => {
		setTimeout(async () => {
			let userToken;
			userToken = null;
			try {
				userToken = await AsyncStorage.getItem("userToken");
			} catch (e) {
				alert(e);
			}
			dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
		}, 1000);
	}, []);

	if (loginState.isLoading) {
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
				{loginState.userToken !== null ? (
					<BottomNavScreen />
				) : (
					<MainNav />
				)}
			</NavigationContainer>
		</AuthContex.Provider>
	);
}
