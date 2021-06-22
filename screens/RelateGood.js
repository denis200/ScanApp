import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default function RelateScreen(props) {
  return (
    <View>
      <Modal transparent={true} visible={true} style={styles.modal}>
        <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
          <View style={styles.modal}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  props.change();
                  props.clear();
                }}
                style={styles.closeModal}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Закрыть</Text>
              </TouchableOpacity>

              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Image
                  style={styles.image}
                  source={{
                    uri: props.product.image,
                  }}></Image>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, marginHorizontal: 20 }}>{props.product.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 20,
                  marginTop: 8,
                }}>
                <View style={{ flex: 2 }}>
                  <Text style={{ fontSize: 24 }}>{props.product.price}</Text>
                </View>
              </View>
              <Image
                source={require('../src/stick.jpg')}
                style={{ marginHorizontal: 20, marginTop: 15 }}></Image>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 20,
                    marginTop: 20,
                    color: 'grey',
                  }}>
                  Описание:
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    marginHorizontal: 20,
                    marginTop: 5,
                  }}>
                  {props.product.description}
                </Text>
              </View>

              <View style={{ height: 20 }}></View>
            </ScrollView>
            <TouchableOpacity
              onPress={() => {
                props.change();
              }}
              style={styles.addButton}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingVertical: 11,
                  color: '#fff',
                  fontSize: 17,
                }}>
                Добавить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#00aa00',
    borderRadius: 13,
    marginHorizontal: '25%',
    marginTop: 20,
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  modal: {
    backgroundColor: '#ffffff',
    marginTop: '20%',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backButton: {
    borderWidth: 2,
    paddingVertical: 13,
    backgroundColor: '#00aaff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: -600,
  },
  againButton: {
    borderWidth: 2,
    paddingVertical: 13,
    backgroundColor: '#00aa00',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: -600,
    borderColor: '#00aa00',
  },
  closeModal: {
    paddingVertical: 8,
    marginHorizontal: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#00aa00',
  },
});
