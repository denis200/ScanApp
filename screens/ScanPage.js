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
import {BarCodeScanner} from "expo-barcode-scanner"
import Ionicons from "react-native-vector-icons/Ionicons"
import {ScrollView} from "react-native-gesture-handler"
import SmallGood from "../components/ui/goodSmall"

export default function ScanScreen({route, navigation}) {
	const [product, setProduct] = useState({})
	const [related, setRelation] = useState([])
	const [hasPermission, setHasPermission] = useState(null)
	const [scanned, setScanned] = useState(false)
	const [modalVisible, setVisible] = useState(false)

	useEffect(() => {
		;(async () => {
			const {status} = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === "granted")
		})()
	}, [])

	const GetGoodInfo = barcode => {
		fetch(`https://scanappbarcode.azurewebsites.net/GetProduct`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				"UPCEAN": barcode,
			}),
		})
			.then(response => {
				return response.json()
			})
			.then(data => {
				setProduct(data.product)
				setRelation(data.relatedProducts)
				//alert(JSON.stringify(data))
				setVisible(true)
				//alert(JSON.stringify(product.name))
			})
	}

	const handleBarCodeScanned = ({type, data}) => {
		setScanned(true)
		//alert(`Ваш штрихкод: ${data}. Тип штрихкода - ${type}`)
		GetGoodInfo(data)
	}

	if (hasPermission === null) {
		return <Text>Запрос разрешения камеры</Text>
	}
	if (hasPermission === false) {
		return <Text>Нет доступа к камере!</Text>
	}

	return (
		<View
			style={styles.container}
			backButton={() => {
				setVisible(false)
			}}
		>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			></BarCodeScanner>
			{scanned && (
				<TouchableOpacity
					style={styles.againButton}
					onPress={() => {
						setScanned(false)
					}}
				>
					<Text style={{textAlign: "center", color: "#fff"}}>
						Нажмите,чтобы отсканировать снова
					</Text>
				</TouchableOpacity>
			)}
			<Modal
				transparent={true}
				visible={modalVisible}
				style={styles.modal}
			>
				<View style={{backgroundColor: "#000000aa", flex: 1}}>
					<View style={styles.modal}>
						<ScrollView
							style={{borderWidth: 2, borderColor: "red"}}
						>
							<TouchableOpacity
								onPress={() => {
									setVisible(false)
								}}
								style={styles.closeModal}
							>
								<Text
									style={{textAlign: "center", color: "#fff"}}
								>
									Закрыть
								</Text>
							</TouchableOpacity>

							<View style={{alignItems: "center", marginTop: 20}}>
								<Image
									style={styles.image}
									source={{
										uri: product.image,
									}}
								></Image>
							</View>
							<View style={{marginTop: 20}}>
								<Text
									style={{fontSize: 20, marginHorizontal: 20}}
								>
									{product.name}
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginLeft: 20,
									marginTop: 8,
								}}
							>
								<View style={{flex: 2}}>
									<Text style={{fontSize: 24}}>
										{product.price}
									</Text>
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
										fontSize: 20,
										marginLeft: 20,
										marginTop: 20,
										color: "grey",
									}}
								>
									Описание:
								</Text>
								<Text
									style={{
										fontSize: 17,
										marginHorizontal: 20,
										marginTop: 5,
									}}
								>
									{product.description}
								</Text>
							</View>
							<View>
								<Text
									style={{
										fontSize: 20,
										marginLeft: 20,
										marginTop: 20,
										color: "grey",
									}}
								>
									С этим берут:
								</Text>
							</View>
							<View>
								<ScrollView
									style={{
										marginTop: 10,
										marginHorizontal: 20,
									}}
									showsHorizontalScrollIndicator={false}
									horizontal={true}
								>
									{related.map(good => {
										return (
											<SmallGood
												image={good.image}
												price={good.price}
											></SmallGood>
										)
									})}
								</ScrollView>
							</View>
							<View style={{height: 20}}></View>
						</ScrollView>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Корзина", {
									data: product,
								}),
									setVisible(false)
							}}
							style={styles.addButton}
						>
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
