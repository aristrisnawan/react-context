import { createContext, useState, useEffect, useContext } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const user = {
      name: "Asep",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    };
    setUser(user);
  }, []);

  const appContextValue = {
    user: user,
    setUser,
    theme,
    setTheme,
  };
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
}
