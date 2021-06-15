import React from 'react';
import { View } from 'react-native';
import PersonalUserData from './ProfilePageFolder/PersonalUserData';
import AdvertisingAndPromotions from './ProfilePageFolder/AdvertisingAndPromotions';

export default function SettingScreen({ navigation }) {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <PersonalUserData />
      </View>
      <View>
        <AdvertisingAndPromotions />
      </View>
    </View>
  );
}
