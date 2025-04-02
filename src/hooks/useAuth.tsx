
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

interface User {
  id: string;
  email: string;
  name: string;
  isNewUser?: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved login info in localStorage
    const savedUser = localStorage.getItem('cryptoUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('cryptoUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // In a real app, this would connect to an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes only - in real app, this would be validated by backend
      const mockUser = {
        id: `user-${Date.now()}`,
        email,
        name: email.split('@')[0],
      };
      
      setUser(mockUser);
      localStorage.setItem('cryptoUser', JSON.stringify(mockUser));
      toast({
        description: 'Successfully logged in',
        variant: 'default',
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setLoading(true);
    try {
      // In a real app, this would connect to an API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes only
      const newUser = {
        id: `user-${Date.now()}`,
        email,
        name,
        isNewUser: true,
      };
      
      setUser(newUser);
      localStorage.setItem('cryptoUser', JSON.stringify(newUser));
      toast({
        description: 'Account created successfully!',
        variant: 'default',
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: 'Registration failed',
        description: 'Please try again with a different email',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cryptoUser');
    toast({
      description: 'You have been logged out',
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
