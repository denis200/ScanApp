import React from 'react';
import { useState } from 'react';
import { Image } from 'react-native-elements';
import { Text, Switch } from 'react-native';
import { View } from 'react-native';

export default function AdvertisingAndPromotions() {
  const [Mail, setMail] = useState(false);
  const [PushMessage, setPushMessage] = useState(false);

  const toggleSwitchMail = () => setMail((previousState) => !previousState);
  const toggleSwitchPushMessage = () => setPushMessage((previousState) => !previousState);

  return (
    <View>
      <View style={{ marginTop: 20 }}></View>
      <Text
        style={{
          fontSize: 20,
          marginHorizontal: 40,
          marginTop: 10,
          color: 'gray',
          fontWeight: '500',
        }}>
        Реклама и акции
      </Text>
      <View>
        <View style={{ marginHorizontal: 40, flexDirection: 'row', marginTop: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'grey', marginTop: 5 }}>
            Push-уведомления и SMS
          </Text>
          <Switch
            style={{ marginLeft: 40 }}
            value={PushMessage}
            onValueChange={toggleSwitchPushMessage}
            color="orange"
          />
        </View>
      </View>
    </View>
  );
}
