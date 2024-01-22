import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();

const styleElement = document.getElementById("theme-body");

// Theme hook
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("LIGHTTHEME");

  // setting currentTheme
  useEffect(() => {
    if (theme === "LIGHTTHEME") {
      styleElement.classList.remove("DARKTHEME");
      styleElement.classList.add("LIGHTTHEME");
    } else {
      styleElement.classList.remove("LIGHTTHEME");
      styleElement.classList.add("DARKTHEME");
    }
  }, [theme]);

  // theme Handler function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "DARKTHEME" ? "LIGHTTHEME" : "DARKTHEME"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
