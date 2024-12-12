import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomButton from './CustomButton';
import StyledInputField from './StyledInputField';
import { loginApi } from '@/app/services/api';
import CustomGradientButton from './CustomGradientButton';
// import InputField from '../components/InputField';
// import Button from '../components/Button';
// import { loginApi } from '../services/api';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {

    if (!username || !password) {
      console.log('username');

      Alert.alert('Please fill in both fields');
      return;
    }

    try {
      const data = await loginApi(username, password);
      if (data.success) {
        // Navigate to the next screen or do something on successful login
        Alert.alert('Login Successful');
      } else {
        Alert.alert('Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Login failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <StyledInputField
        placeholder="Username"
        label={'Name'}
        value={username}
        onChangeText={setUsername}
      />
      <StyledInputField
        placeholder="Password"
        label={'Password'}
        value={password}
        onChangeText={setPassword}
      />
      <CustomGradientButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 30,
  },
});

export default LoginScreen;
