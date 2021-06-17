import * as React from "react"
import {useState} from "react"
import MapView from "react-native-maps"

import {
	Button,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Icon,
	Image,
	Dimensions,
} from "react-native"
export default function AdressScreen({navigation}) {
	const [image, setImage] = useState("")
	var markers = [
		{
			latitude: 45.65,
			longitude: -78.9,
			title: "Foo Place",
			subtitle: "1234 Foo Drive",
		},
	]

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 55.79017669160441,
					longitude: 37.599515690233844,
					latitudeDelta: 0.5,
					longitudeDelta: 0.5,
				}}
			>
				<MapView.Marker
					style={{width: 300, height: "50%"}}
					coordinate={{
						latitude: 55.789436127987614,
						longitude: 37.599542755750996,
					}}
					title={"Магазин 'Семерочка'"}
					description={"Оплата через телефон"}
				/>
				<MapView.Marker
					style={{width: 300, height: "50%"}}
					coordinate={{
						latitude: 55.74082989247661,
						longitude: 37.55279093096222,
					}}
					title={"Магазин 'Восьмерочка'"}
					description={"Оплата через телефон"}
				/>
				<MapView.Marker
					style={{width: 300, height: "50%"}}
					coordinate={{
						latitude: 55.72515572088628,
						longitude: 37.60631320880562,
					}}
					title={"Магазин 'Девяточка'"}
					description={"Оплата через телефон"}
				/>
				<MapView.Marker
					style={{width: 300, height: "50%"}}
					coordinate={{
						latitude: 55.753776788499465,
						longitude: 37.61996961651047,
					}}
					title={"Магазин 'Десяточка'"}
					description={"Оплата через телефон"}
				/>
			</MapView>
		</View>
	)
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	map: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
})
