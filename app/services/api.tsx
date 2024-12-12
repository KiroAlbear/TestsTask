import axios from 'axios';

const apiUrl = 'https://app.rel2.stgrapidusertests.com/api/tester/login';  // Replace with your API URL

interface LoginResponse {
  token_type?: string;
  expires_in?: number;
  access_token?: string;
  refresh_token?: string;
  // You can add other fields based on your API response
}

export const loginApi = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post(apiUrl, {
      "email": username,
      "password": password,
    });
    // convert response data to login response
    console.log(response.data);
    return response.data as LoginResponse;
  } catch (error) {
    // console.error('Login failed', error);
    throw new Error('Login failed');
  }
};
