import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Image, Switch } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <View style={{ marginTop: 40 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ marginLeft: 20 }}>
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
            <Text style={{ fontSize: 40, marginHorizontal: 30, marginTop: 10 }}>
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Настройки');
          }}
          style={{ marginTop: 50 }}>
          <Text style={{ textAlign: 'center', fontSize: 22 }}>Настройки</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 22 }}>Выход</Text>
          </TouchableOpacity>
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
