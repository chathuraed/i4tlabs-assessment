import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/auth/login';

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      return response.data; // Successful response, you may want to customize this based on your API's response structure
    } else {
      throw new Error('Login failed'); // Handle the error case appropriately
    }
  } catch (error) {
    throw error; // Handle the error case appropriately
  }
};

export default {login};
