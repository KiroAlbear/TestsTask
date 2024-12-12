import axios from 'axios';
import { TestsResponseModel } from '../models/TestsResponseModel';


const baseUrl = "https://app.rel2.stgrapidusertests.com/api/tester";
const loginUrl = baseUrl + '/login';  // Replace with your API URL
const testsUrl = baseUrl + '/tests';  // Replace with your API URL



export const loginApi = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post(loginUrl, {
      "email": username,
      "password": password,
    });
    return response.data as LoginResponse;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const testsnApi = async (bearerToken: string,): Promise<TestsResponseModel> => {
  try {
    const response = await axios.get(testsUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`, // Bearer Authorization header
      },
    });
    return response.data as TestsResponseModel;
  } catch (error) {
    throw error;
  }
};
