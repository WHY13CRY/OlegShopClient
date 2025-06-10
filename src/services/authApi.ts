import api from './api'

export const handleSignIn = async (email: string, password: string) => {
  try {
    const res = await api.post('/api/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    return true;
  } catch (error) {
    alert('Login Failed');
    return false;
  }
};

export const handleSignUp = async (fullName: string, email: string, password: string) => {
  try {
    await api.post('/api/users/register', { email, password, full_name: fullName });
    alert('Registred successfully');
    return true;
  } catch (error) {
    alert('Registration Failed');
    return false;
  }
};