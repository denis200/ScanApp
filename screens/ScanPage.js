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

export default function ScanScreen({route, navigation}) {
	const [hasPermission, setHasPermission] = useState(null)
	const [scanned, setScanned] = useState(false)
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
				alert(JSON.stringify(data))
			})
	}

	const handleBarCodeScanned = ({type, data}) => {
		setScanned(true)
		alert(`Ваш штрихкод: ${data}. Тип штрихкода - ${type}`)
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
