import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Layout from '../components/layout';
import TextField from '../components/forms/text-field';
import PrimaryButton from '../components/button';
import {RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    // const response = await login(username, password);

    // if (response.success) {
    //   console.log(response);
    // } else {
    //   // Handle LoginScreen failure
    // }

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.sav}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 16,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
});

export default LoginScreen;
