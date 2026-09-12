import { useEffect, useState } from "react";
import {
  getCurrentUser,
  getToken,
  logoutUser,
} from "../services/authService";

const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    const currentToken = getToken();

    setUser(currentUser);
    setToken(currentToken);
    setLoading(false);
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
    setToken(null);
  };

  return {
    user,
    token,
    loading,
    isAuthenticated: !!token,
    logout,
  };
};

export default useAuth;