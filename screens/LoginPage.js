import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { isPasswordValid } from "../src/Validation/Valid";

export default function LoginScreen({ navigation }) {
	const [inputLogin, setInputLogin] = useState("");
	const [inputPassword, setinputPassword] = useState("");

	return (
		<View>
			<Text
				style={{ fontSize: 24, textAlign: "center", marginTop: "70%" }}
			>
				Добро пожаловать!
			</Text>
			<Input
				placeholder='Логин'
				maxLength={32}
				autoCorrect={false}
				value={inputLogin}
				errorStyle={{ marginHorizontal: 34 }}
				inputContainerStyle={{ borderBottomWidth: 0 }}
				onChangeText={(login) => {
					setInputLogin(login);
				}}
				error={
					inputLogin.length < 6
						? inputLogin === ""
							? false
							: true
						: false
				}
				errorMessage={
					inputLogin.length < 6
						? inputLogin === ""
							? true
							: "Укажите более 6 символов."
						: true
				}
				style={styles.inputLogin}
			/>
			<Input
				placeholder='Ваш Пароль'
				maxLength={25}
				autoCorrect={false}
				errorStyle={{ marginHorizontal: 34 }}
				secureTextEntry={true}
				value={inputPassword}
				inputContainerStyle={{ borderBottomWidth: 0 }}
				onChangeText={(password) => {
					setinputPassword(password);
				}}
				errorMessage={
					isPasswordValid(inputPassword) ? (
						inputPassword === "" ? (
							false
						) : (
							<Text>
								Пароль должен быть не короче 8 символов и
								содержать строчную и заглавную буквы и цифру.
							</Text>
						)
					) : (
						false
					)
				}
				error={
					isPasswordValid(inputPassword)
						? inputPassword === ""
							? false
							: true
						: false
				}
				style={styles.inputPass}
			></Input>

			<View
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					onPress={() => {
						navigation.navigate("Code");
					}}
					buttonStyle={styles.buttonAuth}
					disabled={isPasswordValid(inputPassword) || inputLogin < 8}
					title='Войти'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputLogin: {
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
		borderRadius: 17,
		backgroundColor: "#00a86b",
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
		marginTop: 10,
	},
});
