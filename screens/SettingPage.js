import React from "react"
import {View} from "react-native"
import {useState} from "react"
import PersonalUserData from "./ProfilePageFolder/PersonalUserData"
import AdvertisingAndPromotions from "./ProfilePageFolder/AdvertisingAndPromotions"

export default function SettingScreen({route, navigation}) {
	const [user, setUser] = useState({})

	React.useEffect(() => {
		if (route.params?.user) {
			setUser(JSON.parse(route.params?.user))
		}
	}, [route.params?.user])
	return (
		<View>
			<View style={{marginTop: 20}}>
				<PersonalUserData user={user} />
			</View>
			<View>
				<AdvertisingAndPromotions />
			</View>
		</View>
	)
}
