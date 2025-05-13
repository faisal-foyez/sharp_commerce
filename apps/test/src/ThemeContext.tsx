import React, { useState } from "react";

export const ThemeContext = React.createContext({
  browserTheme: 'light',
  setBrowserTheme: (theme: string) => {}
})


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{ browserTheme: theme, setBrowserTheme: setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;