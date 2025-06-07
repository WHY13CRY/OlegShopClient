export function useAuth() {
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  const logout = () => {
    localStorage.removeItem('token');
  };

  return {
    token,
    isLoggedIn,
    logout,
  };
}
