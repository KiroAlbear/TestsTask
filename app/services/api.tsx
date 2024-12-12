import axios from 'axios';

const apiUrl = 'https://your-api-url.com/login';  // Replace with your API URL

interface LoginResponse {
  success: boolean;
  message?: string;
  // You can add other fields based on your API response
}

export const loginApi = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post(apiUrl, {
      username,
      password,
    });
    // convert response data to login response
    console.log(response.data);
    return response.data as LoginResponse;
  } catch (error) {
    throw new Error('Login failed');
  }
};
