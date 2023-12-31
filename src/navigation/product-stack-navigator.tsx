// productsStack.js
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from '../features/home/ProductsScreen';
import ProductDetailsScreen from '../features/home/ProductDetailsScreen';
import CheckoutScreen from '../features/cart/CheckoutScreen';
import {ProductStackParamList} from './types';

const Stack = createNativeStackNavigator<ProductStackParamList>();

const ProductsStack: React.FC<{}> = () => (
  <Stack.Navigator initialRouteName="ProductList">
    <Stack.Screen
      options={{
        title: 'Products',
      }}
      name="ProductList"
      component={ProductsScreen}
    />
    <Stack.Screen
      options={{
        headerTitle: '',
        headerBackTitleVisible: false,
      }}
      name="ProductDetails"
      component={ProductDetailsScreen}
    />
    <Stack.Screen name="Checkout" component={CheckoutScreen} />
  </Stack.Navigator>
);

export default ProductsStack;
