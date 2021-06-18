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
import Swipeable from "react-native-gesture-handler/Swipeable"
import Ionicons from "react-native-vector-icons/Ionicons"

const Good = props => {
	const rightSwipe = (progress, dragX) => {
		const scale = dragX.interpolate({
			inputRange: [0, 100],
			outputRange: [0.9, 0.6],
		})
		return (
			<TouchableOpacity onPress={props.handleDelete}>
				<View style={styles.deleteBox}>
					<Animated.Text style={{transform: [{scale: scale}]}}>
						Удалить
					</Animated.Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View style={{marginTop: 10}}>
			<Swipeable renderRightActions={rightSwipe}>
				<View
					style={{
						flexDirection: "row",
						marginHorizontal: 10,
					}}
				>
					<View style={{justifyContent: "center"}}>
						<Image
							style={styles.good}
							source={{uri: props.product.image}}
						></Image>
					</View>

					<View>
						<View style={{marginTop: 10, width: "88%"}}>
							<Text style={{fontSize: 18, marginLeft: 10}}>
								{props.product.name}
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginTop: 10,
								marginLeft: 20,
							}}
						>
							<Ionicons
								onPress={props.handle1Delete}
								name={"remove-circle-outline"}
								size={30}
							></Ionicons>
							<Text style={{fontSize: 18, marginTop: 3}}>
								{" "}
								1 шт{" "}
							</Text>
							<Ionicons
								onPress={props.handleAdd1}
								name={"add-circle-outline"}
								size={30}
							></Ionicons>
							<Text
								style={{
									fontSize: 20,
									color: "#000000",
									marginTop: 3,
									marginLeft: 40,
								}}
							>
								{props.product.price}
							</Text>
						</View>
					</View>
				</View>
			</Swipeable>
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
		height: "100%",
	},
})
export default Good
