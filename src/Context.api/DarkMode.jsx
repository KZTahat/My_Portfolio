import React, { createContext, useContext, useState } from "react";

const DarkMode = createContext();

const useDarkMode = () => {
  const context = useContext(DarkMode);
  if (!context) throw new Error("Error creating DarkMode");

  return context;
};

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchThemMode = () => setDarkMode(!darkMode);

  return (
    <DarkMode.Provider value={{ darkMode, switchThemMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export { useDarkMode, DarkModeProvider };
