import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

const Button = (props, { navigation }) => {
	return (
		<View
			style={{
				backgroundColor: "#00aa00",
				marginHorizontal: "10%",
				borderRadius: 15,
			}}
		>
			<Text
				onPress={() => props.nav.navigate(props.text)}
				style={{
					fontSize: 22,
					color: "#ffffff",
					textAlign: "center",
					marginVertical: 10,
				}}
			>
				{props.text}
			</Text>
		</View>
	);
};
export default Button;
