import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContex } from '../components/contex';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/core';

export default function ProfileScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContex);
  const [user, setUser] = useState();
  const [leter, setLet] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const isFocused = useIsFocused();

  React.useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
      if (result) {
        setUser(result);
        setIsLoading(false);
      }
    });

    if (user) {
      const USer = JSON.parse(user);
      setName(USer.name);
    }
  }, [user, isFocused]);

  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <View style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <Avatar
              size="large"
              rounded
              title={name[0]}
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
            <Text
              style={{
                fontSize: 35,
                marginHorizontal: 20,
                marginTop: 10,
              }}>
              {name}
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('./../src/stick.jpg')}
            style={{
              marginHorizontal: 20,
              marginTop: '15%',
            }}></Image>

          <View style={styles.fieldsWrapper}>
            <TouchableOpacity
              style={styles.fields}
              onPress={() => {
                navigation.navigate('Настройки', { user: user });
              }}>
              <View style={styles.punkt}>
                <Ionicons name={'settings-outline'} size={32}></Ionicons>
                <Text style={styles.textof}>Настройки профиля</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./../src/stick.jpg')}
            style={{
              marginHorizontal: 20,
            }}></Image>
          <View style={styles.fieldsWrapper}>
            <TouchableOpacity
              style={styles.fields}
              onPress={() => {
                navigation.navigate('Адреса');
              }}>
              <View style={styles.punkt}>
                <Ionicons name={'map-outline'} size={32}></Ionicons>
                <Text style={styles.textof}>Наши адреса</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./../src/stick.jpg')}
            style={{
              marginHorizontal: 20,
            }}></Image>

          <View style={styles.fieldsWrapper}>
            <TouchableOpacity
              style={styles.fields}
              onPress={() => {
                navigation.navigate('FeedBack');
              }}>
              <View style={styles.punkt}>
                <Ionicons name={'mail-open-outline'} size={32}></Ionicons>
                <Text style={styles.textof}>Связаться с нами</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./../src/stick.jpg')}
            style={{
              marginHorizontal: 20,
            }}></Image>
          <View style={styles.fieldsWrapper}>
            <TouchableOpacity
              style={styles.fields}
              onPress={() => {
                signOut();
              }}>
              <View style={styles.punkt}>
                <Ionicons name={'walk-outline'} size={32}></Ionicons>
                <Text style={styles.textof}>Выход</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./../src/stick.jpg')}
            style={{
              marginHorizontal: 20,
            }}></Image>
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
  fieldsWrapper: {
    flexDirection: 'row',
  },
  fields: {
    padding: '4%',
    width: '100%',

    height: '100%',
  },
  textof: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 17,
  },
  punkt: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
  },
});
