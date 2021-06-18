import React, {useState, useEffect} from "react"
import {
	Text,
	View,
	StyleSheet,
	Button,
	TouchableOpacity,
	Modal,
	Image,
	ActivityIndicator,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import {ScrollView} from "react-native-gesture-handler"

export default function ModalScreen(props, {route, navigation}) {
	const [visible, setVisible] = React.useState(false)
	React.useEffect(() => {
		setVisible(props.modalVisible)
	}, [props.modalVisible])
	return (
		<View>
			<Modal transparent={true} visible={visible} style={styles.modal}>
				<View style={{backgroundColor: "#000000aa", flex: 1}}>
					<View style={styles.modal}>
						<TouchableOpacity
							onPress={() => {
								setVisible(false)
							}}
							style={styles.closeModal}
						>
							<Text style={{textAlign: "center", color: "#fff"}}>
								Закрыть
							</Text>
						</TouchableOpacity>
						<View style={{alignItems: "center"}}>
							<Image
								style={styles.image}
								source={{
									uri: "https://reactnative.dev/img/tiny_logo.png",
								}}
							></Image>
						</View>
						<View>
							<Text style={{fontSize: 20, marginLeft: 20}}>
								Молоко
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								marginLeft: 20,
								marginTop: 8,
							}}
						>
							<View style={{flex: 1}}>
								<Text style={{fontSize: 24}}>60</Text>
							</View>
							<View style={{flexDirection: "row", flex: 1}}>
								<Ionicons
									name={"remove-circle-outline"}
									size={30}
								></Ionicons>
								<Text style={{fontSize: 18, marginTop: 3}}>
									3 шт
								</Text>
								<Ionicons
									name={"add-circle-outline"}
									size={30}
								></Ionicons>
							</View>
						</View>
						<Image
							source={require("../src/stick.jpg")}
							style={{marginHorizontal: 20, marginTop: 15}}
						></Image>
						<View>
							<Text
								style={{
									textAlign: "center",
									marginTop: 10,
									fontSize: 22,
								}}
							>
								Похожие товары:
							</Text>
						</View>
						<View>
							<ScrollView
								horizontal={true}
								style={{height: "17%"}}
							></ScrollView>
						</View>
						<View>
							<Text style={{textAlign: "center", fontSize: 22}}>
								С этим берут:
							</Text>
						</View>
						<View>
							<ScrollView
								horizontal={true}
								style={{height: "17%"}}
							></ScrollView>
						</View>
						<TouchableOpacity style={styles.addButton}>
							<Text
								style={{
									textAlign: "center",
									paddingVertical: 11,
									color: "#fff",
									fontSize: 17,
								}}
							>
								Добавить
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	addButton: {
		backgroundColor: "#00aa00",
		borderRadius: 13,
		marginHorizontal: "25%",
		marginTop: 20,
	},
	image: {
		height: 200,
		width: 200,
		resizeMode: "contain",
	},
	modal: {
		backgroundColor: "#ffffff",
		marginTop: "20%",
		flex: 1,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
	backButton: {
		borderWidth: 2,
		paddingVertical: 13,
		backgroundColor: "#00aaff",
		borderRadius: 16,
		marginHorizontal: 20,
		marginBottom: -600,
	},
	againButton: {
		borderWidth: 2,
		paddingVertical: 13,
		backgroundColor: "#00aa00",
		borderRadius: 16,
		marginHorizontal: 20,
		marginBottom: -600,
		borderColor: "#00aa00",
	},
	closeModal: {
		paddingVertical: 8,
		marginHorizontal: "30%",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		backgroundColor: "#00aa00",
	},
})
