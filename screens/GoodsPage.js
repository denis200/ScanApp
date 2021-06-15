import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  useEffect,
  ActivityIndicator,
  Alert,
} from 'react-native';

export default function GoodsScreen({ route, navigation }) {
  const [goods, setGoods] = useState([]);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [isFound, setFound] = useState(false);
  const [quantityname, setQuantityname] = useState('');

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.content}>Текущий список:</Text>
        <Text style={{ marginLeft: 30, fontSize: 18 }}>0 товаров</Text>
      </View>
      <View style={{ height: '42%' }}>
        <ScrollView style={{ marginTop: 20, marginHorizontal: 30 }}></ScrollView>
      </View>
      <Text style={styles.scanButton}>Отсканировать товар</Text>

      <View style={{ flexDirection: 'row', marginTop: 80, marginRight: 30 }}>
        <Text style={{ fontSize: 25, marginLeft: 30, flexGrow: 1 }}>Итого:</Text>
        <Text style={{ fontSize: 25 }}>0 руб.</Text>
      </View>
      <Text style={styles.payButton}>Оплатить</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: '100%',
  },
  payButton: {
    marginTop: 15,
    textAlign: 'center',
    borderWidth: 2,
    color: '#fff',
    backgroundColor: '#00aa00',
    borderColor: '#00aa00',
    paddingVertical: 10,
    borderRadius: 17,
    marginHorizontal: 30,
    fontSize: 20,
  },
  scanButton: {
    marginTop: 40,
    textAlign: 'center',
    borderWidth: 2,
    color: '#00aa00',
    borderColor: '#00aa00',
    paddingVertical: 10,
    borderRadius: 17,
    marginHorizontal: 30,
    fontSize: 20,
  },
  content: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 25,
    marginBottom: 40,
  },
});
