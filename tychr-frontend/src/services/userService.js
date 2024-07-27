import axios from 'axios';

export const api_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export const loginRequest = async (username, password) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/local`, {
      identifier: username,
      password: password,
    });
    return res.data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

export const registerRequest = async (fullname, email, phone, password, profile) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/local/register`, {
      username: fullname,
      email: email,
      phone: phone,
      password: password,
      profile: profile,
    });
    return res.data;
  } catch (error) {
    console.error('Register Error: ', error);
    throw error;
  }
};

export const getCurrentUser = async (token) => {
  try {
    const res = await axios.get(`${api_url}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('JWTCheck Error:', error);
    throw error;
  }
};

export const forgotPasswordEmail = async (email) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/forgot-password`, {
      email: email,
    });

    return res.data;
  } catch (error) {
    console.log('Failed to send email:', error);
  }
};

export const ResetPassword = async (code, password, confirmPassword) => {
  try {
    const res = await axios.post(`${api_url}/api/auth/reset-password`, {
      code: code,
      password: password,
      passwordConfirmation: confirmPassword,
    });
    alert('Your password has been reset.');
    return res.data;
  } catch (error) {
    console.log('Failed to reset Password', error);
    throw error;
  }
};
