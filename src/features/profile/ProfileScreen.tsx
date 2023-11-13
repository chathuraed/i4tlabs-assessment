import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Layout from '../../components/layout';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <SafeAreaView style={styles.sav}>
      <Layout scrollEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
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
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});

export default ProfileScreen;
