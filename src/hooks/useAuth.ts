import { useEffect, useState } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'))
  
  useEffect(()=>{
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem('token'))
    }

    window.addEventListener('storage', checkAuth)
  },[])

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
  };

  return {
    token: localStorage.getItem('token'),
    isLoggedIn,
    logout,
  };
}
