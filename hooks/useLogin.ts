import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { loginApi, testsnApi } from '@/app/services/api';
import { TestsResponseModel } from '@/app/models/TestsResponseModel';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { RootStackParamList } from '@/app/screens/Arguments/ScreenArguments';

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isLoginSuccess, setLoginSuccess] = useState<boolean>(false);
    const [firstItems, setFirstItems] = useState<TestsModel[]>([]);
    const [secondtItems, setSecondItems] = useState<TestsModel[]>([]);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Validate input fields
    const validateFields = (username: string, password: string): boolean => {
        if (!username || !password) {
            Alert.alert(
                'Required',
                'Please fill in both fields',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
            return false;
        }
        return true;
    };

    // Handle successful login
    const handleTestsApi = async (accessToken: string) => {
        const firstItemsBuffer: TestsModel[] = [];
        const secondItemsBuffer: TestsModel[] = [];
        try {
            const testsResponse: TestsResponseModel = await testsnApi(accessToken);

            for (let i = 0; i < testsResponse.data.standard_tests.length; i++) {
                const test = testsResponse.data.standard_tests[i];
                const item: TestsModel = {
                    id: test.testsuite_id,
                    title: test.device_name,
                    subtitle: test.test_type,
                    price: `${test.fee} $`,
                };
                if (testsResponse.data.standard_tests[i].test_type.toLowerCase() == 'unmoderated') {
                    secondItemsBuffer.push(item);

                } else if (testsResponse.data.standard_tests[i].test_type.toLowerCase() == 'moderated') {
                    firstItemsBuffer.push(item);
                }

            }

            for (let i = 0; i < testsResponse.data.mod_rut_tests.length; i++) {
                const test = testsResponse.data.mod_rut_tests[i];
                const item: TestsModel = {
                    id: test.testsuite_id,
                    title: test.device_name,
                    subtitle: test.test_type,
                    price: `${test.fee} $`,
                };
                if (testsResponse.data.mod_rut_tests[i].test_type.toLowerCase() == 'unmoderated') {
                    secondItemsBuffer.push(item);
                } else if (testsResponse.data.mod_rut_tests[i].test_type.toLowerCase() == 'moderated') {
                    firstItemsBuffer.push(item);
                }

            }

            setFirstItems(firstItemsBuffer);
            setSecondItems(secondItemsBuffer);
            setLoginSuccess(true);

            navigation.navigate('TestsScreen', { firstList: firstItemsBuffer, secondList: secondItemsBuffer });




        } catch (error) {
            // console.error('Error fetching tests data:', error);
            Alert.alert(
                'Error',
                'Failed to fetch tests data.',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    };

    // Handle login process
    const handleLoginApi = async (username: string, password: string) => {
        setLoginSuccess(false);
        if (!validateFields(username, password)) {
            return;
        }

        try {
            setLoading(true);
            const loginResponse = await loginApi(username, password);
            setLoading(false);

            if (loginResponse.token_type !== '') {


                console.log('Access Token:', loginResponse.access_token);
                await handleTestsApi(loginResponse.access_token!);
            } else {
                Alert.alert(
                    'Failed',
                    'Invalid credentials',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                    { cancelable: false }
                );
            }
        } catch (error) {
            setLoading(false);
            // console.error('Login failed:', error);
            Alert.alert(
                'Login failed',
                'Please try again.',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    };

    return {
        loading,
        isLoginSuccess,
        handleLogin: handleLoginApi,
        firstItems,
        secondtItems
    };
};
