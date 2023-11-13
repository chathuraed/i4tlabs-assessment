import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Layout from '../../components/layout';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import {Rating} from 'react-native-stock-star-rating';
import Slider from '@react-native-community/slider';
import PrimaryButton from '../../components/button';
import {ProductStackParamList} from '../../navigation/types';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[] | null;
}

type DetailsScreenRouteProp = RouteProp<
  ProductStackParamList,
  'ProductDetails'
>;

type ProductDetailsScreenProps = {
  route: DetailsScreenRouteProp & {
    params: {product: Product};
  };
  navigation: NativeStackNavigationProp<
    ProductStackParamList,
    'ProductDetails'
  >;
};

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({route}) => {
  const {product} = route.params;
  const [quantity, setQuantity] = React.useState(1);

  return (
    <SafeAreaView style={styles.sav}>
      <Layout scrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: product.thumbnail}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <View style={[styles.rowContainer, {marginVertical: 24}]}>
            <Text style={styles.price}>Price:</Text>
            <Text style={styles.price}>{product.price}$</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.feedback}>Feedback</Text>
            <Rating stars={product.rating} maxStars={5} size={20} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 16,
            }}>
            <Text>Quantity</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
              }}>
              <Text style={{marginHorizontal: 16}}>{1}</Text>
              <Slider
                style={{flexGrow: 1}}
                step={1}
                minimumValue={1}
                maximumValue={10}
                thumbTintColor={'#6558f5'}
                value={quantity}
                onValueChange={setQuantity}
              />
              <Text style={{marginHorizontal: 16}}>{10}</Text>
            </View>
          </View>
          <PrimaryButton
            testID="login-button"
            title={`Add to Cart (${quantity})`}
            onPress={() => {}}
          />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sav: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    height: 250,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
  feedback: {
    fontSize: 16,
    color: '#555',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductDetailsScreen;
