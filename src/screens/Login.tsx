import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {login} from '../api';
import Layout from '../components/layout';
import TextField from '../components/forms/text-field';
import PrimaryButton from '../components/button';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await login(username, password);

    if (response.success) {
      console.log(response);
    } else {
      // Handle authentication failure
    }
  };

  return (
    <SafeAreaView style={[styles.sav]}>
      <Layout scrollEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Practical Test</Text>
          <TextField
            testID="username-input"
            value={username}
            placeholder="Username"
            onChangeText={value => setUsername(value)}
            autoCapitalize="none"
          />

          <TextField
            testID="password-input"
            value={password}
            placeholder="Password"
            onChangeText={value => setPassword(value)}
            secureTextEntry
            autoCapitalize="none"
          />

          <PrimaryButton
            testID="login-button"
            title="Login"
            onPress={handleLogin}
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
  scroll_view: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});

export default Authentication;
