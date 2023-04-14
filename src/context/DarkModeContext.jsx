import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // prev => !prev 
    updateDarkMode(!darkMode); // !prev => prev
  };

  return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>;
};

function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useDarkMode = () => useContext(DarkModeContext);