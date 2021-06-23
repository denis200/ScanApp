import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmailValid } from '../../src/Validation/Valid';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={80}
    />
  );
};

export default function CommunicationWithDevelopersScreen({ navigation }) {
  const [User, setUser] = useState(null);
  const [Email, setEmail] = useState(null);

  const [TopicMessage, setTopicMessage] = useState('');
  const [Message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [IsSend, setIsSend] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('user', (err, result) => {
      if (result) {
        var localuser = JSON.parse(result);
        setUser(localuser);
        setEmail(localuser.email);
      }
    });
  }, []);

  const sendMessage = () => {
    setIsLoading(true);
    fetch(`https://scanappbarcode.azurewebsites.net/SendEmailForFeedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        Email: Email,
        Theme: TopicMessage,
        Message: Message,
      }),
    }).then((response) => {
      if (response.status === 200) {
        setIsLoading(false);
        navigation.goBack();
        alert('Успешно отправлено');
        setIsSend(true);
      } else {
        alert('Ошибка');
        setIsLoading(false);
      }
    });
  };

  return (
    <View>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50%',
          }}>
          <ActivityIndicator size="large" color="#00aa00"></ActivityIndicator>
        </View>
      ) : (
        <View style={{ marginTop: 60 }}>
          {User != null ? (
            <View>
              <Input
                label="Электронная почта для ответа"
                error={isEmailValid(Email) ? (Email === '' ? false : true) : false}
                errorStyle={{ marginHorizontal: 34 }}
                errorMessage={
                  isEmailValid(Email) ? (Email === '' ? false : 'Формат example@mail.ru') : false
                }
                labelStyle={{
                  marginHorizontal: 30,
                  color: '#808080',
                  fontSize: 18,
                  fontWeight: '600',
                }}
                autoCorrect={false}
                style={styles.inputData}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                value={Email}
                inputContainerStyle={{ borderBottomWidth: 0 }}></Input>
              <Input
                onChangeText={(text) => {
                  setTopicMessage(text);
                }}
                value={TopicMessage}
                label="Тема сообщения"
                labelStyle={{
                  marginHorizontal: 30,
                  color: '#808080',
                  fontSize: 18,
                  fontWeight: '600',
                }}
                autoCorrect={false}
                style={styles.inputData}
                inputContainerStyle={{ borderBottomWidth: 0 }}></Input>
              <Text
                style={{
                  marginLeft: 45,
                  marginBottom: 10,
                  marginTop: 30,
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'gray',
                }}>
                Сообщение
              </Text>
              <UselessTextInput
                label="Сообщение"
                style={styles.inputMessage}
                labelStyle={{
                  marginHorizontal: 30,
                  color: '#808080',
                  fontSize: 18,
                  fontWeight: '600',
                }}
                multiline
                value={Message}
                onChangeText={(text) => {
                  setMessage(text);
                }}
                numberOfLines={4}></UselessTextInput>
              <View>
                <View style={{ marginTop: 80 }}>
                  <Button
                    lab
                    disabled={TopicMessage.length < 3}
                    onPress={() => sendMessage()}
                    title="Отправить письмо"
                    disabled={
                      Message.length < 4 || isEmailValid(Email) || TopicMessage.length < 3
                        ? true
                        : IsSend
                        ? true
                        : false
                    }
                    color="#FF0000"
                    buttonStyle={{
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
          ) : (
            <View>
              <Text>Load</Text>
            </View>
          )}
        </View>
      )}
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
  inputMessage: {
    backgroundColor: '#e0e0e0',
    height: 180,
    paddingHorizontal: 20,
    marginHorizontal: 40,
    borderRadius: 14,
  },
});
