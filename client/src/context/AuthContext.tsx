import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authService";

interface User {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  role?: "user" | "mechanic" | "admin";
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = getCurrentUser();

    if (savedUser) {
      setUser(savedUser);
    }

    setLoading(false);
  }, []);

  const login = async (
    data: LoginData
  ): Promise<void> => {
    const response = await loginUser(data);

    if (response.user) {
      setUser(response.user);
    }
  };

  const register = async (
    data: RegisterData
  ): Promise<void> => {
    const response = await registerUser(data);

    if (response.user) {
      setUser(response.user);
    }
  };

  const logout = (): void => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};

export default AuthContext;