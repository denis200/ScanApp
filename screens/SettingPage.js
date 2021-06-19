import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useState } from 'react';
import PersonalUserData from './ProfilePageFolder/PersonalUserData';
import AdvertisingAndPromotions from './ProfilePageFolder/AdvertisingAndPromotions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmailValid } from '../src/Validation/Valid';

export default function SettingScreen({ route, navigation }) {
  const [user, setUser] = useState({});
  const [IsChanged, setIsChanged] = useState(true);
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [BirthDay, setBirthDay] = useState('');
  const [Email, setEmail] = useState('');

  React.useEffect(() => {
    if (route.params?.user) {
      var localUser = JSON.parse(route.params?.user);
      setUser(JSON.parse(route.params?.user));
      setPhoneNumber({
        international: localUser.phoneNumber,
      });
      setBirthDay({
        dt: localUser.dateBirth,
      });
      setEmail(localUser.email);
    }
  }, [route.params?.user]);

  const sendUpdateProfile = () => {
    fetch(`https://scanappbarcode.azurewebsites.net/UpdateProfile/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        Name: user.name,
        PhoneNumber: PhoneNumber.international,
        BirthDate: BirthDay.dt,
        Email: Email,
      }),
    }).then((response) => {
      alert(response.status === 200 ? 'Измненеия применены' : 'Ошибка');
      if (response.status === 200) {
        user.email = Email;
        user.phoneNumber = PhoneNumber.international;
        user.dateBirth = BirthDay.dt;

        // AsyncStorage.removeItem('user');
        AsyncStorage.setItem('user', JSON.stringify(user)); // update data
      }
    });
  };

  return (
    <View style={{ marginVertical: 30 }}>
      {user != null ? (
        <View>
          <View style={{ marginTop: 20 }}>
            <PersonalUserData
              user={user}
              PhoneNumber={PhoneNumber}
              setPhoneNumber={setPhoneNumber}
              BirthDay={BirthDay}
              setBirthDay={setBirthDay}
              Email={Email}
              setEmail={setEmail}
            />
          </View>
          <View>
            <AdvertisingAndPromotions />
          </View>
          <View style={{ marginTop: '30%' }}>
            <Button
              onPress={() => {
                sendUpdateProfile();
              }}
              disabled={
                user.phoneNumber === PhoneNumber.international &&
                user.dateBirth === BirthDay.dt &&
                user.email === Email
                  ? true
                  : false
              }
              lab
              title="Подтвердить изменения"
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
      ) : (
        <View></View>
      )}
    </View>
  );
}
