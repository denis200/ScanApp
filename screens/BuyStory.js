import React from "react"
import {useState} from "react"
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Button,
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
} from "react-native"
import {ScrollView} from "react-native-gesture-handler"
import GoodHistory from "../components/ui/goodHistory"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"

const wait = timeout => {
	return new Promise(resolve => setTimeout(resolve, timeout))
}

const Purchase = props => {
	const [showList, setShowList] = useState(false)

	const [name, setName] = useState("chevron-down-circle-outline")
	return (
		<View>
			<TouchableOpacity
				onPress={() => {
					showList
						? (setShowList(false),
						  setName("chevron-down-circle-outline"))
						: (setShowList(true),
						  setName("chevron-up-circle-outline"))
				}}
				style={{
					flexDirection: "row",
					borderWidth: 2,
					borderColor: "#00aa00",
					paddingVertical: 10,
					marginTop: 10,
					marginHorizontal: 30,
					borderRadius: 14,
				}}
			>
				<Text style={{flex: 1, marginLeft: 20, fontSize: 16}}>
					Покупка
				</Text>
				<Ionicons style={{marginRight: 20}} name={name} size={25} />
			</TouchableOpacity>
			<View style={{marginHorizontal: 30, marginTop: 1}}>
				{showList &&
					props.goods.map(good => {
						return (
							<GoodHistory
								name={good.name}
								price={good.price}
								image={good.image}
							></GoodHistory>
						)
					})}
				{showList && (
					<View
						style={{
							flexDirection: "row",
							marginRight: 10,
							marginBottom: 20,
							marginTop: 10,
						}}
					>
						<Text
							style={{fontSize: 21, marginLeft: 10, flexGrow: 1}}
						>
							Итого:
						</Text>
						<Text style={{fontSize: 21}}>
							{props.sum.toFixed(2)} руб.
						</Text>
					</View>
				)}
			</View>
		</View>
	)
}

export default function StoryScreen({route, navigation}) {
	const [refreshing, setRefreshing] = React.useState(false)
	const [history, setHistory] = useState([])
	const [userid, setUserId] = useState(1)
	const [isClear, setIsClear] = useState(true)
	const [isLoading, setIsLoading] = useState(true)
	const GetPurchaseHistory = () => {
		AsyncStorage.getItem("id", (err, result) => {
			alert(result)
			if (result) {
				fetch(
					`https://scanappbarcode.azurewebsites.net/GetPurchaseHistory/cb3c27d5-9436-4657-8aa6-0390598c1af0`
				)
					.then(response => {
						if (response.status === 200) {
							return response.json()
						}
					})
					.then(data => {
						setHistory(data)
						setIsLoading(false)
						setRefreshing(false)
					})
			}
		})
	}

	React.useEffect(() => {
		GetPurchaseHistory()
	}, [])

	const onRefresh = React.useCallback(() => {
		setRefreshing(true)
		wait(2000).then(() => {
			GetPurchaseHistory(userid)
		})
	}, [])

	return (
		<View style={{backgroundColor: "#fff"}}>
			<Text style={{textAlign: "center", fontSize: 24, marginTop: 50}}>
				История покупок:
			</Text>

			<ScrollView
				style={{height: "86%", marginTop: 25}}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{isLoading ? (
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
					history.map(purch => {
						return (
							<Purchase
								goods={purch.productsIncludeOrder}
								sum={purch.totalСost}
							></Purchase>
						)
					})
				)}
			</ScrollView>
		</View>
	)
}
