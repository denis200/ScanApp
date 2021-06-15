import * as React from "react";
import {
	Button,
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Alert,
} from "react-native";
import { Avatar } from "react-native-elements";

export default function ProfileScreen({ navigation }) {
	return (
		<View style={{ backgroundColor: "#fff", height: "100%" }}>
			<View>
				<View style={{ flexDirection: "row", marginTop: 30 }}>
					<View style={{ marginLeft: 20 }}>
						<Avatar
							size='large'
							rounded
							title={"D"}
							titleStyle={{ color: "#000" }}
							onPress={() => console.log("Works!")}
							activeOpacity={0.7}
							avatarStyle={{
								borderColor: "#00aa00",
								borderWidth: 2,
							}}
						/>
					</View>
					<View>
						<Text style={{ fontSize: 25, marginLeft: 20 }}>
							Denis
						</Text>
						<Text
							style={{
								fontSize: 20,
								marginLeft: 20,
								color: "#00aa00",
							}}
						>
							soundze@mail.ru
						</Text>
					</View>
				</View>
				<View style={{ marginTop: 40 }}>
					<TouchableOpacity style={{ paddingVertical: 10 }}>
						<Text style={{ textAlign: "center", fontSize: 25 }}>
							Личная информация
						</Text>
					</TouchableOpacity>
					<Image
						source={require("./../src/stick.jpg")}
						style={{
							marginHorizontal: 20,
							marginTop: 15,
						}}
					></Image>
					<TouchableOpacity
						style={{ paddingVertical: 10, marginTop: 10 }}
					>
						<Text style={{ textAlign: "center", fontSize: 25 }}>
							Адреса магазинов
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={{ paddingVertical: 10, marginTop: 300 }}
				>
					<Text style={{ textAlign: "center", fontSize: 25 }}>
						Выход
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
