import * as React from "react"
import {useState} from "react"
import {StyleSheet, View, Text, TouchableOpacity} from "react-native"
import {Button, Image} from "react-native-elements"
import {Avatar} from "react-native-elements"
import Ionicons from "react-native-vector-icons/Ionicons"
import {AuthContex} from "../components/contex"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useIsFocused} from "@react-navigation/core"

export default function ProfileScreen({navigation}) {
	const {signOut} = React.useContext(AuthContex)
	const [user, setUser] = useState()
	const [leter, setLet] = useState("")
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")

	const isFocused = useIsFocused()

	React.useEffect(() => {
		AsyncStorage.getItem("user", (err, result) => {
			if (result) {
				setUser(result)
			}
		})

		if (user) {
			const USer = JSON.parse(user)
			setName(USer.name)
		}
	}, [user, isFocused])

	return (
		<View style={{backgroundColor: "#fff", height: "100%"}}>
			<View style={{marginTop: 40}}>
				<View style={{flexDirection: "row", marginHorizontal: 10}}>
					<View style={{marginLeft: 10}}>
						<Avatar
							size="large"
							rounded
							title={name[0]}
							titleStyle={{color: "#000"}}
							onPress={() => console.log("Works!")}
							activeOpacity={0.7}
							avatarStyle={{
								borderColor: "#696969",
								borderWidth: 2,
							}}
						/>
					</View>
					<View>
						<Text
							style={{
								fontSize: 40,
								marginHorizontal: 20,
								marginTop: 10,
							}}
						>
							{name}
						</Text>
					</View>
				</View>
				<View>
					<View style={styles.fieldsWrapper}>
						<TouchableOpacity
							style={styles.fields}
							onPress={() => {
								navigation.navigate("Настройки", {user: user})
							}}
						>
							<Text style={{fontSize: 30}}>
								Настройки профиля
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.fieldsWrapper}>
						<TouchableOpacity
							style={styles.fields}
							onPress={() => {
								navigation.navigate("Адреса")
							}}
						>
							<Text style={{fontSize: 30}}>Наши адреса</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.fieldsWrapper}>
						<TouchableOpacity
							style={styles.fields}
							onPress={() => {
								navigation.navigate("FeedBack")
							}}
						>
							<Text style={{fontSize: 30}}>Связаться с нами</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<View style={{marginTop: "25%"}}>
						<Button
							onPress={() => {
								signOut()
							}}
							lab
							title="Выйти из аккаунта"
							style={{
								marginHorizontal: "23%",
								borderRadius: 17,
								backgroundColor: "#00a86b",
								color: "#FF0000",
								textAlign: "center",
								fontSize: 22,
							}}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	inputLogin: {
		borderRadius: 14,
		height: 50,
		fontSize: 20,
		marginHorizontal: 30,
		backgroundColor: "#e0e0e0",
		borderColor: "#e0e0e0",
		paddingHorizontal: 20,
		marginTop: 10,
	},
	buttonAuth: {
		marginTop: 40,
		marginHorizontal: "23%",
		borderRadius: 17,
		backgroundColor: "#00a86b",
	},
	inputPass: {
		borderWidth: 2,
		borderRadius: 14,
		height: 50,
		fontSize: 20,
		marginHorizontal: 30,
		backgroundColor: "#e0e0e0",
		borderColor: "#e0e0e0",
		paddingHorizontal: 20,
		marginTop: 10,
	},
	fieldsWrapper: {
		flexDirection: "row",
		marginTop: "20%",
		marginHorizontal: "10%",
		backgroundColor: "#DCDCDC",
		borderRadius: 10,
	},
	fields: {
		padding: "2%",
		width: "100%",
		height: "100%",
	},
})
