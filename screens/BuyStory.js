import React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GoodHistory from '../components/ui/goodHistory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Purchase = (props) => {
  const [showList, setShowList] = useState(false);

  const [name, setName] = useState('chevron-down-circle-outline');
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          showList
            ? (setShowList(false), setName('chevron-down-circle-outline'))
            : (setShowList(true), setName('chevron-up-circle-outline'));
        }}
        style={{
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: '#00aa00',
          paddingVertical: 10,
          marginTop: 10,
          marginHorizontal: 15,
          borderRadius: 14,
        }}>
        <Text style={{ flex: 1, marginLeft: 20, fontSize: 18 }}>Покупка</Text>
        <Text style={{ marginLeft: 20, fontSize: 18 }}>{props.date.split('T')[0]} </Text>
        <Text style={{ marginLeft: 10, fontSize: 18, marginRight: 20 }}>
          {props.date.split('T')[1].split('.')[0].slice(0, 5)}
        </Text>
        <Ionicons style={{ marginRight: 20 }} name={name} size={25} />
      </TouchableOpacity>
      <View style={{ marginHorizontal: 15, marginTop: 1 }}>
        {showList &&
          props.goods.map((good) => {
            return (
              <GoodHistory
                key={good.product.upcean}
                name={good.product.name}
                price={good.product.price}
                image={good.product.image}
                count={good.count}></GoodHistory>
            );
          })}
        {showList && (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
              marginBottom: 20,
              marginTop: 20,
            }}>
            <Text style={{ fontSize: 21, marginLeft: 10, flexGrow: 1 }}>Итого:</Text>
            <Text style={{ fontSize: 21 }}>{props.sum.toFixed(2)} руб.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default function StoryScreen({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [history, setHistory] = useState([]);
  const [userid, setUserId] = useState(1);
  const [isClear, setIsClear] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const GetPurchaseHistory = () => {
    AsyncStorage.getItem('id', (err, result) => {
      //alert(result)
      if (result) {
        fetch(`https://scanappbarcode.azurewebsites.net/GetPurchaseHistory/${result}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((data) => {
            if (data !== undefined) {
              setHistory(data.reverse());
              setIsLoading(false);
              setRefreshing(false);
            } else {
              setIsLoading(false);
              setIsClear(true);
              setRefreshing(false);
            }
          });
      }
    });
  };

  React.useEffect(() => {
    GetPurchaseHistory();
  }, []);

  const onRefresh = React.useCallback(() => {
    setIsClear(false);
    setRefreshing(true);
    wait(2000).then(() => {
      GetPurchaseHistory(userid);
    });
  }, []);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Text style={{ textAlign: 'center', fontSize: 24, marginTop: 50 }}>История покупок:</Text>

      <ScrollView
        style={{ height: '86%', marginTop: 25 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {isClear ? (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 260,
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://img.icons8.com/dusk/452/order-history.png',
                }}
                style={{
                  height: 100,
                  width: 100,
                }}></Image>
            </View>
            <Text style={{ fontSize: 20, color: '#8d6c9f' }}>История пуста!</Text>
          </View>
        ) : (
          <View></View>
        )}
        {isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#00aa00"></ActivityIndicator>
          </View>
        ) : (
          history.map((purch) => {
            return (
              <Purchase
                key={purch.dateTime}
                goods={purch.productsIncludeOrder}
                sum={purch.totalСost}
                date={purch.dateTime}></Purchase>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
