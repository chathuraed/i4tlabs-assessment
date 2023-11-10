import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/layout';

import Products from '../assets/mocks/products.json';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {ProductStackParamList, RootStackParamList} from '../navigation/types';

type ProductsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ProductStackParamList, 'ProductList'>,
  NativeStackScreenProps<RootStackParamList>
>;

const ProductsScreen: React.FC<ProductsScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.sav}>
      <Layout scrollEnabled={true}>
        <View style={styles.container}>
          {Products.products.map((product, i) => {
            return (
              <TouchableOpacity
                key={i.toString()}
                onPress={() => {
                  navigation.navigate('ProductDetails', {product});
                }}>
                <View style={styles.card}>
                  <Text style={styles.title}>{product.title}</Text>
                  <Text style={styles.description}>{product.description}</Text>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: product.thumbnail}}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
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
    marginTop: 16,
    marginHorizontal: 16,
  },
  card: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  image: {
    height: 200,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
});

export default ProductsScreen;
