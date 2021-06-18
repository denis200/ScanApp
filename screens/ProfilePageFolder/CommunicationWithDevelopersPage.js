import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const [TopicMessage, setTopicMessage] = useState('');
  const [Message, setMessage] = useState('');

  return (
    <View style={{ marginTop: 60 }}>
      <Input
        onChangeText={(text) => {
          setTopicMessage(text);
        }}
        value={TopicMessage}
        label="Тема сообщения"
        labelStyle={{ marginHorizontal: 30 }}
        autoCorrect={false}
        style={styles.inputData}
        inputContainerStyle={{ borderBottomWidth: 0 }}></Input>
      <Text
        style={{
          marginHorizontal: 30,
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
        labelStyle={{ marginHorizontal: 30 }}
        multiline
        numberOfLines={4}></UselessTextInput>
      <View>
        <View style={{ marginTop: 80 }}>
          <Button
            lab
            disabled={TopicMessage.length < 3}
            title="Отправить письмо"
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
    marginHorizontal: 30,
    borderRadius: 14,
  },
});