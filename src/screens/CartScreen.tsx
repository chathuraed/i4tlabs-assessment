import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/layout';

import CartData from '../assets/mocks/cart.json';
import {Text} from 'react-native';
import PrimaryButton from '../components/button';
import {RouteProp} from '@react-navigation/native';
import {ProductStackParamList} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type CartScreenProps = {
  navigation: NativeStackNavigationProp<ProductStackParamList, 'Checkout'>;
};

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.sav}>
      <View style={styles.container}>
        <Layout scrollEnabled={true}>
          {CartData.map((item, i) => {
            return (
              <View key={i.toString()} style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    flexGrow: 1,
                    alignSelf: 'stretch',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 16,
                  }}>
                  <Text
                    style={[styles.title, {fontSize: 16, fontWeight: '600'}]}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      width: 150,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.title}>Quantity {item.stock}</Text>
                    <TouchableOpacity onPress={() => {}}>
                      <Text
                        style={[
                          styles.title,
                          {color: 'red', fontWeight: '400'},
                        ]}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={[styles.title, {fontSize: 16, fontWeight: '500'}]}>
                  {item.price}$
                </Text>
              </View>
            );
          })}
        </Layout>
      </View>

      <View style={{marginBottom: 16, marginHorizontal: 16}}>
        <PrimaryButton
          testID="login-button"
          title="Checkout"
          onPress={() => {
            navigation.navigate('Checkout');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sav: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    padding: 8,
    marginBottom: 4,
    backgroundColor: '#fff',
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  imageContainer: {
    overflow: 'hidden',
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default CartScreen;
