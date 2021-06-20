import React from 'react';
import { useState } from 'react';
import { Input, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { isEmailValid } from '../../src/Validation/Valid';

export default function PersonalUserData(props) {
  return (
    <View
    //   style={{ flex: 1, alignItems: 'center', height: '100%', flexDirection: 'column-reverse' }}
    >
      <View style={{ marginHorizontal: 10, marginBottom: '5%' }}>
        <Text style={{ marginHorizontal: 30, color: '#808080', fontSize: 18, fontWeight: '500' }}>
          Номер телефона
        </Text>
        <TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'Custom',
            withDDD: true,
            dddMask: '+7(***)-***-**-**',
          }}
          style={styles.inputData}
          value={props.PhoneNumber.international}
          maxLength={17}
          onChangeText={(text) => {
            props.setPhoneNumber({
              international: text,
            });
          }}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginBottom: '5%' }}>
        <Text style={{ marginHorizontal: 30, color: '#808080', fontSize: 18, fontWeight: '500' }}>
          Дата рождения
        </Text>
        <TextInputMask
          style={styles.inputData}
          type={'datetime'}
          value={props.BirthDay.dt}
          options={{
            format: 'DD.MM.YYYY',
          }}
          onChangeText={(text) => {
            props.setBirthDay({
              dt: text,
            });
          }}
        />
      </View>

      <Input
        label="Электронная почта"
        error={isEmailValid(props.Email) ? (props.Email === '' ? false : true) : false}
        errorStyle={{ marginHorizontal: 34 }}
        errorMessage={
          isEmailValid(props.Email)
            ? props.Email === ''
              ? false
              : 'Формат example@mail.ru'
            : false
        }
        defaultValue={props.Email}
        labelStyle={{ marginHorizontal: 30, color: '#808080', fontSize: 18, fontWeight: '500' }}
        autoCorrect={false}
        style={styles.inputData}
        onChangeText={(text) => {
          props.setEmail(text);
        }}
        inputContainerStyle={{ borderBottomWidth: 0 }}></Input>
    </View>
  );
}

const styles = StyleSheet.create({
  inputData: {
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
