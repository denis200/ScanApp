import React, {useState, useEffect} from "react"
import {View, Text, TouchableOpacity, Icon} from "react-native"
import {CreditCardInput} from "react-native-credit-card-input"

export default function CreditCardScreen({navigation}) {
	const [creditCard, setCard] = useState({})

	const onChange = formData => {
		setCard({
			number: formData.values.number,
			date: formData.values.expiry,
			cvc: formData.values.cvc,
		})
	}

	return (
		<View>
			<View style={{marginTop: "30%"}}>
				<CreditCardInput
					onChange={onChange}
					labels={{
						number: "Номер карты",
						expiry: "ДД/ММ",
						cvc: "CVC/CCV",
					}}
					allowScroll={true}
					invalidColor={false}
				/>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate({
							name: "Оплата",
							params: {card: creditCard.number},
							merge: true,
						})
					}}
					style={{
						backgroundColor: "#00aa00",
						paddingVertical: 10,
						marginHorizontal: "30%",
						borderRadius: 13,
						marginTop: 60,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#fff",
						}}
					>
						Сохранить
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
