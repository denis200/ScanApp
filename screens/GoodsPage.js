import React from 'react';
import { useState } from 'react';
import { useIsFocused } from '@react-navigation/core';

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
import Good from '../components/ui/good';

export default function GoodsScreen({ route, navigation }) {
  const isFocused = useIsFocused();

  const [goods, setGoods] = useState([]);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [fromprev, setPrev] = useState(false);
  const [quantityname, setQuantityname] = useState('');
  function addGood(data) {
    let isFind = goods.find((good) => good.upcean === data.upcean);

    if (isFind === undefined) {
      setGoods((prev) => [...prev, data]);

      setCount((prev) => prev + 1);

      setSum((prev) => prev + data.price * data.quantity);
    } else {
      goods.map((obj) =>
        obj.upcean === data.upcean
          ? addItem(obj.quantity, obj.upcean, obj.price, data.quantity)
          : obj,
      );
    }
  }

  const deleteItem = (code, price, quantity) => {
    const arr = [...goods];
    let delArr = arr.filter((item) => item.upcean !== code);
    setGoods(delArr);
    setCount(count - 1);
    setSum(sum - price * quantity);
  };
  const addItem = (quantity, code, price, actQuantity) => {
    setSum(sum + price * actQuantity);
    setGoods(
      goods.map((obj) =>
        obj.upcean === code ? { ...obj, quantity: quantity + actQuantity } : obj,
      ),
    );
  };
  const delete1Item = (quantity, name, code, price) => {
    setGoods(goods.map((obj) => (obj.upcean === code ? { ...obj, quantity: quantity - 1 } : obj)));
    if (quantity == 1) {
      deleteItem(code, price, quantity);
    }
    setSum(sum - price);
  };

  React.useEffect(() => {
    if (route.params?.data2) {
      addGood(route.params?.data2);
    }
  }, [route.params?.data2]);

  React.useEffect(() => {
    if (route.params?.data1) {
      addGood(route.params?.data1);
    }
  }, [route.params?.data1]);

  React.useEffect(() => {
    if (route.params?.frompay) {
      setCount(0);
      setSum(0);
      setGoods([]);
    }
  }, [route.params?.frompay]);

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.content}>Текущий список:</Text>
        <Text style={{ marginLeft: 30, fontSize: 18, marginTop: 20 }}>{count} товаров</Text>
      </View>
      <View style={{ height: '55%' }}>
        <ScrollView style={{ marginTop: 20, marginHorizontal: 10 }}>
          {goods.map((good) => {
            return (
              <Good
                key={good.upcean}
                product={good}
                handleAdd1={() => addItem(good.quantity, good.upcean, good.price, 1)}
                handle1Delete={() => delete1Item(good.quantity, good.name, good.upcean, good.price)}
                handleDelete={() => deleteItem(good.upcean, good.price, good.quantity)}></Good>
            );
          })}
        </ScrollView>
      </View>
      <Text
        onPress={() => {
          navigation.navigate('Сканировать');
        }}
        style={styles.scanButton}>
        Отсканировать товар
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 30, marginRight: 30 }}>
        <Text style={{ fontSize: 25, marginLeft: 30, flexGrow: 1 }}>Итого:</Text>
        <Text style={{ fontSize: 25 }}>{sum.toFixed(2)} руб.</Text>
      </View>
      <Text
        style={styles.payButton}
        onPress={() => {
          goods[0]
            ? navigation.navigate('Оплата', { data: goods, sum: sum })
            : Alert.alert('Ошибка', 'Ваша корзина пуста');
        }}>
        Оплатить
      </Text>
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
    marginTop: 20,
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
  },
});
