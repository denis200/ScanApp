import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Touchable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GoodHistory = (props) => {
    return (

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image source={{ uri: props.image }} style={styles.good}></Image>
            <View >
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginTop: 4, fontSize: 21, marginLeft: 20, }}>{props.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, color: '#000000', marginTop: 3, marginLeft: 50 }}>{props.price}</Text>
                </View>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    good: {
        width: 80,
        height: 100,
        resizeMode: 'contain'
    },
    deleteBox: {
        backgroundColor: '#ff3300',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 90,

    }
})
export default GoodHistory