import {NavigatorScreenParams} from '@react-navigation/native';
import {Product} from '../features/home/ProductDetailsScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: NavigatorScreenParams<BottomTabParamList>;
};

export type BottomTabParamList = {
  Products: NavigatorScreenParams<ProductStackParamList>;
  Cart: undefined;
  Profile: undefined;
};

export type ProductStackParamList = {
  ProductList: undefined;
  ProductDetails: {product: Product};
  Checkout: undefined;
};
