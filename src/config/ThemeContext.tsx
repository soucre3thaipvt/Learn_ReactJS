import { useState, createContext } from "react";

const ThemeContext = createContext<any|undefined>(undefined);

function ThemeProvider({ children }:any) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(1);
    
  };
  
  const value = {
    theme,
    toggleTheme,

  };
   
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
