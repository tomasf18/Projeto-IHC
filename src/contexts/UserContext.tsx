import React, { createContext, useState, useContext, useEffect } from "react";

export interface User {
  email: string;
  password: string;
  isUserLoggedIn: boolean;
  isClient: boolean;
}

export const UserContext = createContext<{
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = (email: string, password: string) => {
    const isClient = !email.endsWith("@stylistco.com");
    setUser({
      email,
      password,
      isUserLoggedIn: true,
      isClient,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
