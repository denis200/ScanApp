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

export default function RegScreen({ navigation }) {
	return (
		<View>
			<Text
				style={{
					textAlign: "center",
					marginTop: "15%",
					fontSize: 25,
					marginBottom: 20,
				}}
			>
				Регистрация
			</Text>
			<TextInput
				placeholder='Имя'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>
			<TextInput
				placeholder='Дата Рождения'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>
			<TextInput
				placeholder='Email'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>
			<TextInput
				placeholder='Телефон'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>
			<TextInput
				secureTextEntry={true}
				placeholder='Пароль'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>
			<TextInput
				secureTextEntry={true}
				placeholder='Повторите пароль'
				maxLength={32}
				autoCorrect={false}
				style={styles.input}
			></TextInput>

			<TouchableOpacity
				onPress={() => {
					navigation.navigate("SetCode");
				}}
				style={styles.buttonReg}
			>
				<Text
					style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
				>
					Зарегистрироваться
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonReg: {
		marginTop: 80,
		marginHorizontal: "23%",
		borderRadius: 20,
		backgroundColor: "#00a86b",
		paddingVertical: 10,
	},
	input: {
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
