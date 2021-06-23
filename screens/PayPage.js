import React from "react"
import {useState} from "react"
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Image,
	useEffect,
	ActivityIndicator,
	Alert,
} from "react-native"
import {StackActions} from "@react-navigation/native"
import {CommonActions} from "@react-navigation/native"

import AsyncStorage from "@react-native-async-storage/async-storage"

const PayGood = props => {
	return (
		<View style={{marginTop: 7}}>
			<View
				style={{
					borderTopWidth: 0.7,
					borderBottomWidth: 2.0,
					borderTopColor: "#00aa00",
					borderLeftColor: "#00aa00",
					borderRightColor: "#00aa00",
					borderBottomColor: "#00aa00",
					borderLeftWidth: 0.7,
					borderRightWidth: 2.0,
					paddingVertical: 12,
					borderRadius: 20,
					flexDirection: "row",
				}}
			>
				<View style={{marginLeft: 15}}>
					<Image
						source={{uri: props.image}}
						style={{
							width: 70,
							height: 70,
							resizeMode: "contain",
						}}
					></Image>
				</View>
				<View style={{width: "74%"}}>
					<View style={{marginLeft: 10}}>
						<Text style={{fontSize: 17}}>{props.name} </Text>
					</View>
					<View
						style={{
							alignItems: "flex-end",
							marginRight: 10,
						}}
					>
						<Text style={{fontSize: 17, color: "black"}}>
							{props.quantity}x {props.price}
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const mas = []

export default function PayScreen({route, navigation}) {
	const [goodspay, setGoodsForPay] = useState()
	const [creditcard, setCard] = useState("")
	const [sum, setSum] = useState(0)
	const [userid, setUserId] = useState(1)
	const [loading, setLoading] = useState(true)
	const [isPayed, setIsPayed] = useState(true)

	const [isLoading, setIsLoading] = useState(false)

	React.useEffect(() => {
		AsyncStorage.getItem("id", (err, result) => {
			if (result) {
				setUserId(result)
			}
		})

		if (route.params?.data) {
			setGoodsForPay(route.params?.data)
			setLoading(false)
		}
	}, [route.params?.data])

	React.useEffect(() => {
		if (route.params?.card) {
			setCard(route.params?.card)
		}
	}, [route.params?.card])

	React.useEffect(() => {
		if (route.params?.sum) {
			setSum(route.params?.sum)
		}
	}, [route.params?.sum])

	const BuySomething = userid => {
		setIsLoading(true)
		const products = []
		for (let i = 0; i < goodspay.length; i++) {
			products[i] = {
				UPCEAN: goodspay[i].upcean,
				Count: goodspay[i].quantity,
			}
		}
		let summa = parseFloat(sum.toFixed(2))
		fetch(
			`https://scanappbarcode.azurewebsites.net/SubmitPurchase/${userid}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=UTF-8",
				},
				mode: "no-cors",
				body: JSON.stringify({
					TotalСost: summa,
					UPCEANProducts: products,
				}),
			}
		).then(response => {
			if (response.status === 200) {
				navigation.navigate("Корзина", {frompay: now})
				Alert.alert("Покупатель,", "Спасибо за покупку")
			} else {
				navigation.navigate("Корзина", {frompay: now})
				Alert.alert("Упс...,", "Кажется что то пошло не так")
			}
		})
		var now = new Date().toLocaleTimeString()
	}

	return (
		<View>
			{isLoading ? (
				<View
					style={{
						flex: 1,
						height: "100%",
						marginTop: "50%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ActivityIndicator
						size="large"
						color="#00aa00"
					></ActivityIndicator>
				</View>
			) : (
				<View style={{backgroundColor: "#fff", height: "100%"}}>
					{loading ? (
						<View
							style={{
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<ActivityIndicator
								size="large"
								color="#00aa00"
							></ActivityIndicator>
						</View>
					) : (
						<View>
							<Text
								style={{
									textAlign: "center",
									fontSize: 26,
									marginTop: "15%",
								}}
							>
								Ваша корзина:
							</Text>
							<ScrollView
								style={{
									marginHorizontal: 10,
									height: "55%",
									marginTop: 15,
								}}
							>
								{goodspay.map(good => (
									<PayGood
										name={good.name}
										price={good.price}
										image={good.image}
										quantity={good.quantity}
									></PayGood>
								))}
							</ScrollView>
							<View style={{flexDirection: "row"}}>
								<Text
									style={{
										fontSize: 30,
										marginLeft: "5%",
										flexGrow: 1,
									}}
								>
									ИТОГО:{" "}
								</Text>
								<Text style={{fontSize: 30, marginRight: "5%"}}>
									{sum.toFixed(2)}
								</Text>
							</View>
							<TouchableOpacity
								onPress={() => navigation.navigate("Карта")}
							>
								<Image
									source={require("./../src/stick.jpg")}
									style={{
										marginHorizontal: 20,
										marginTop: 15,
									}}
								></Image>
								{creditcard === "" ? (
									<Text
										style={{
											textAlign: "center",
											fontSize: 22,
											marginVertical: 10,
										}}
									>
										Добавить карту
									</Text>
								) : (
									<View
										style={{
											flexDirection: "row",
											marginHorizontal: 20,
										}}
									>
										<Text
											style={{
												fontSize: 22,
												marginVertical: 10,
												flex: 1,
											}}
										>
											Карта:
										</Text>
										<Text
											style={{
												fontSize: 22,
												marginVertical: 10,
											}}
										>
											**** {creditcard.slice(14)}
										</Text>
									</View>
								)}
								<Image
									source={require("./../src/stick.jpg")}
									style={{
										marginHorizontal: 20,
									}}
								></Image>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									creditcard
										? BuySomething(userid)
										: Alert.alert(
												"Внимание",
												"Добавьте карту!"
										  )
								}}
								style={{
									backgroundColor: "#00aa00",
									paddingVertical: 7,
									marginTop: 40,
									borderRadius: 16,
									marginHorizontal: "20%",
								}}
							>
								<Text
									style={{
										textAlign: "center",
										fontSize: 22,
										color: "#fff",
									}}
								>
									Оплатить
								</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
			)}
		</View>
	)
}
