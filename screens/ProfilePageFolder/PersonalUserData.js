import React from "react"
import {Input} from "react-native-elements"
import {StyleSheet} from "react-native"
import {View} from "react-native"

export default function PersonalUserData(props) {
	return (
		<View>
			<Input
				label="Номер телефона"
				labelStyle={{marginHorizontal: 30}}
				defaultValue={props.user.phoneNumber}
				autoCorrect={false}
				style={styles.inputData}
				inputContainerStyle={{borderBottomWidth: 0}}
			></Input>
			<Input
				label="Дата Рождения"
				defaultValue={""}
				labelStyle={{marginHorizontal: 30}}
				autoCorrect={false}
				style={styles.inputData}
				inputContainerStyle={{borderBottomWidth: 0}}
			></Input>
		</View>
	)
}

const styles = StyleSheet.create({
	inputData: {
		borderRadius: 14,
		height: 50,
		fontSize: 20,
		marginHorizontal: 30,
		backgroundColor: "#e0e0e0",
		borderColor: "#e0e0e0",
		paddingHorizontal: 20,
		marginTop: 10,
	},
})
