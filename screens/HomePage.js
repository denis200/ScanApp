import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import Button from "./../components/button";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ height: "100%" }}>
			<ImageBackground
				source={require(".././src/bgmain.jpg")}
				style={styles.imgBackground}
				resizeMode='cover'
			>
				<View style={{ marginTop: "150%" }}>
					<View>
						<Button nav={navigation} text='Вход' />
					</View>
					<Text
						style={{
							fontSize: 18,
							color: "#ffffff",
							textAlign: "center",
							marginVertical: 7,
						}}
					>
						или
					</Text>
					<View>
						<Button nav={navigation} text='Зарегистрироваться' />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	imgBackground: {
		height: "100%",
	},
	button: {
		marginBottom: 200,
	},
});
