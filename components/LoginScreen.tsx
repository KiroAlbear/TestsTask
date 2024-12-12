import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import CustomButton from './CustomButton';
import StyledInputField from './StyledInputField';
import { loginApi } from '@/app/services/api';
import CustomGradientButton from './CustomGradientButton';

const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {

    if (!username || !password) {
      console.log('username');
      Alert.alert(
        'Required',
        'Please fill in both fields',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
      return;
    }

    try {
      // show loading indicator
      setLoading(true);
      const data = await loginApi(username, password);
      setLoading(false);

      if (data.token_type !== '') {
        // Navigate to the next screen or do something on successful login
        Alert.alert(
          'Success',
          'Login Successful',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false });
      } else {
        Alert.alert(
          'Failed',
          'Invalid credentials',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false });
      }
    } catch (error) {
      setLoading(false);
      Alert.alert(
        'Login failed',
        'Please try again.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
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
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#00C6FB" />
        </View>
      )}
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
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10, // Ensure it appears above other components
  },
});

export default LoginScreen;
