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

const SmallGood = props => {
	return (
		<View>
			<View
				style={{
					width: 100,
					height: 150,
					backgroundColor: "#f8f7f2",
					borderRadius: 9,
					marginRight: 7,

					alignItems: "center",
				}}
			>
				<View
					style={{
						width: 80,
						height: 80,
						borderRadius: 9,
						alignItems: "center",
						backgroundColor: "white",
						marginTop: 10,
					}}
				>
					<Image
						source={{
							uri: props.image,
						}}
						style={{
							width: 70,
							height: 70,

							resizeMode: "contain",
						}}
					></Image>
				</View>
				<View
					style={{
						backgroundColor: "white",
						borderRadius: 9,
						width: 80,
						marginTop: 20,
					}}
				>
					<Text style={{textAlign: "center", fontSize: 17}}>
						{props.price} Ꝑ
					</Text>
				</View>
			</View>
		</View>
	)
}

export default SmallGood
