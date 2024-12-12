import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import StyledInputField from '../../components/StyledInputField';
import { loginApi, testsnApi } from '@/app/services/api';
import CustomGradientButton from '../../components/CustomGradientButton';
import { useLogin } from '@/hooks/useLogin';
import TestsScreen from './TestsScreen';
import { useNavigation } from 'expo-router';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './Arguments/ScreenArguments';



const LoginScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);
  const { loading, isLoginSuccess, handleLogin, firstItems, secondtItems } = useLogin();



  const onLoginPress = async () => {


    await handleLogin(username, password);

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

      <CustomGradientButton title="Login" onPress={onLoginPress} />
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
