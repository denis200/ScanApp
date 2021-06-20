import React from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Animated,
	Touchable,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

const GoodHistory = props => {
	return (
		<View style={{flexDirection: "row", marginTop: 10}}>
			<View style={{justifyContent: "center"}}>
				<Image source={{uri: props.image}} style={styles.good}></Image>
			</View>
			<View style={{marginRight: 30}}>
				<View
					style={{
						marginTop: 3,
						width: "90%",
					}}
				>
					<Text style={{marginTop: 4, fontSize: 15, marginLeft: 20}}>
						{props.name}
					</Text>
				</View>
				<View style={{flexDirection: "row"}}>
					<View
						style={{
							marginTop: 10,
							marginLeft: 25,
						}}
					>
						<Text
							style={{
								fontSize: 17,
								color: "#000000",
								marginTop: 3,
							}}
						>
							{props.count} шт
						</Text>
					</View>
					<View
						style={{
							marginTop: 10,
							marginLeft: 90,
						}}
					>
						<Text
							style={{
								fontSize: 20,
								color: "#000000",
								marginTop: 3,
							}}
						>
							{props.price}
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	good: {
		width: 80,
		height: 80,
		resizeMode: "contain",
	},
	deleteBox: {
		backgroundColor: "#ff3300",
		justifyContent: "center",
		alignItems: "center",
		width: 100,
		height: 90,
	},
})
export default GoodHistory
