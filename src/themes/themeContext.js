import React, { useState, useEffect, createContext } from "react";
import themes from "./themes";
import PropTypes from "prop-types";

export const ThemeContext = createContext(themes.light);

/* eslint-disable react/prop-types */

const ThemeContextWrapper = ({ children }) => {
  // const [theme, setTheme] = useState(themes.light);
     const [theme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme")) || themes.dark
  );

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("theme"));
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  console.log("theme");
  console.log([theme]);
  
  console.log("boolean");
  console.log("If theme name equals light " + theme.name === themes.light.name);

  /* If the theme name is light, set it to dark. Else, set it to light */

  const handleThemeChange = () => {
    theme.name === themes.light.name
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextWrapper.protoTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeContextWrapper;