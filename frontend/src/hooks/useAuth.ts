import { useState, useEffect } from 'react';

interface User {
  cpf: string;
  nome: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        setAuthState({
          isAuthenticated: true,
          user,
          loading: false,
        });
      } catch (error) {
        // Invalid user data, clean up
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false,
        });
      }
    } else {
      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    }
  }, []);

  const login = (token: string, user: User) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuthState({
      isAuthenticated: true,
      user,
      loading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  };

  return {
    ...authState,
    login,
    logout,
  };
}
