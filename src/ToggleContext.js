import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("useToggle는 ToggleContext 내에서 사용되어야 합니다.");
  }
  return context;
};

export const ToggleProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ToggleContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ToggleContext.Provider>
  );
};
