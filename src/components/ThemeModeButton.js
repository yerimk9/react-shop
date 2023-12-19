import React from "react";
import { ThemeModeWrapper } from "../styled";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

export const ThemeModeButton = ({ toggleTheme, themeMode }) => {
  return (
    <ThemeModeWrapper onClick={toggleTheme}>
      {themeMode === "lightTheme" ? (
        <img src={moon} alt="dark" width="30px" />
      ) : (
        <img src={sun} alt="light" width="30px" />
      )}
    </ThemeModeWrapper>
  );
};
