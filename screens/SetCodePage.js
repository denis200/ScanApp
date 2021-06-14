import * as React from "react";
import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	CheckBox,
	TouchableOpacity,
} from "react-native";

export default function SetCodeScreen({ navigation }) {
	return (
		<View style={{ backgroundColor: "#00aa00", height: "100%" }}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 30,
					color: "#ffffff",
					marginTop: 200,
				}}
			>
				Придумайте код:
			</Text>
			<TextInput
				secureTextEntry={true}
				maxLength={4}
				fontSize={30}
				textAlign='center'
				autoCorrect={false}
				style={{
					backgroundColor: "#ffffff",
					fontSize: 20,
					height: 45,
					marginHorizontal: "30%",
					marginTop: 40,
					paddingHorizontal: 20,
				}}
			></TextInput>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Вход");
				}}
				style={{
					borderWidth: 2,
					borderRadius: 14,
					backgroundColor: "#fff",
					marginHorizontal: "20%",
					marginTop: 300,
				}}
			>
				<Text
					style={{
						fontSize: 24,
						color: "#000",
						textAlign: "center",
						paddingVertical: 6,
					}}
				>
					Принять
				</Text>
			</TouchableOpacity>
		</View>
	);
}
