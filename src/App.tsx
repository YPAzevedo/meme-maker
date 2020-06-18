import React, { useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Header from "./components/Header";

import { ToastProvider } from "./hooks/toast";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/global";

const App = () => {
  const [theme, setTheme] = useState(light);

  const switchTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastProvider>
        <Header switchTheme={switchTheme} />
        <Home />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
