import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  const toggleThemeSettings = () => {
    setThemeSettings((prev) => !prev);
  };
  const toggleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  const activeActiveMenu = () => {
    setActiveMenu(true)
  };
  const disableActiveMenu = () => {
    setActiveMenu(false)
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        isClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        toggleThemeSettings,
        toggleActiveMenu,
        activeActiveMenu,
        disableActiveMenu
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
