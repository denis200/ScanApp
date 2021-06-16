import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <Avatar
              size="large"
              rounded
              title={'D'}
              titleStyle={{ color: '#000' }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              avatarStyle={{
                borderColor: '#00aa00',
                borderWidth: 2,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 40, marginHorizontal: 20, marginTop: 10 }}>
              Denis <Ionicons name={'pencil-sharp'} size={25} color={'gray'} />
            </Text>
          </View>
        </View>
        {/* <View style={{ marginTop: 20 }}>
          <PersonalUserData />
        </View>
        <View>
          <AdvertisingAndPromotions />
        </View> */}
        <View style={{ marginHorizontal: 30 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Настройки');
            }}
            style={{ flexDirection: 'row', marginTop: 50 }}>
            <Text style={{ fontSize: 30 }}>Настройки профиля</Text>
            <Ionicons
              style={{ marginHorizontal: '10%', paddingTop: 1 }}
              name={'arrow-forward-circle-outline'}
              size={35}
              color={'gray'}
            />
          </TouchableOpacity>
          <Image style={{ height: 3, width: '100%' }} source={require('.././src/stick.jpg')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Адреса');
            }}
            style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 30, marginRight: '36%' }}>Наши адреса</Text>
            <Ionicons
              style={{ marginRight: 9 }}
              name={'arrow-forward-circle-outline'}
              size={35}
              color={'gray'}
            />
          </TouchableOpacity>
          <Image style={{ height: 3, width: '100%' }} source={require('.././src/stick.jpg')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Банковские карты');
            }}
            style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 30, marginRight: '17%' }}>Банковские карты</Text>
            <Ionicons
              style={{ marginRight: 9 }}
              name={'arrow-forward-circle-outline'}
              size={35}
              color={'gray'}
            />
          </TouchableOpacity>
          <Image style={{ height: 3, width: '100%' }} source={require('.././src/stick.jpg')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FeedBack');
            }}
            style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 30, marginRight: '20%' }}>Связаться с нами</Text>
            <Ionicons
              style={{ marginRight: 9 }}
              name={'arrow-forward-circle-outline'}
              size={35}
              color={'gray'}
            />
          </TouchableOpacity>
          <Image style={{ height: 3, width: '100%' }} source={require('.././src/stick.jpg')} />
        </View>
        <View>
          <View style={{ marginTop: 80 }}>
            <Button
              lab
              title="Выйти из аккаунта"
              color="#FF0000"
              style={{
                marginHorizontal: '23%',
                borderRadius: 17,
                backgroundColor: '#00a86b',
                color: '#FF0000',
                textAlign: 'center',
                fontSize: 22,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputLogin: {
    borderRadius: 14,
    height: 50,
    fontSize: 20,
    marginHorizontal: 30,
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonAuth: {
    marginTop: 40,
    marginHorizontal: '23%',
    borderRadius: 17,
    backgroundColor: '#00a86b',
  },
  inputPass: {
    borderWidth: 2,
    borderRadius: 14,
    height: 50,
    fontSize: 20,
    marginHorizontal: 30,
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
