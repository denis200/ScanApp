import React from "react";
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";

export default function LoginScreen({ navigation }) {
	return (
		<View>
			<Text
				style={{ fontSize: 24, textAlign: "center", marginTop: "70%" }}
			>
				Добро пожаловать!
			</Text>
			<TextInput
				placeholder='Email'
				maxLength={32}
				autoCorrect={false}
				style={styles.inputLogin}
			></TextInput>
			<TextInput
				placeholder='Пароль'
				maxLength={25}
				autoCorrect={false}
				secureTextEntry={true}
				style={styles.inputPass}
			></TextInput>

			<TouchableOpacity style={styles.buttonAuth}>
				<Text
					style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
				>
					Войти
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	inputLogin: {
		borderWidth: 2,
		borderRadius: 14,
		height: 50,
		fontSize: 20,
		marginHorizontal: 30,
		backgroundColor: "#e0e0e0",
		borderColor: "#e0e0e0",
		paddingHorizontal: 20,
		marginTop: 40,
	},
	buttonAuth: {
		marginTop: 40,
		marginHorizontal: "23%",
		borderRadius: 20,
		backgroundColor: "#00a86b",
		paddingVertical: 10,
	},
	inputPass: {
		borderWidth: 2,
		borderRadius: 14,
		height: 50,
		fontSize: 20,
		marginHorizontal: 30,
		backgroundColor: "#e0e0e0",
		borderColor: "#e0e0e0",
		paddingHorizontal: 20,
		marginTop: 20,
	},
});
