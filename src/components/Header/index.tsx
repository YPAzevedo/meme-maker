import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import logo from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

import Switch from "react-dark-mode-toggle";

import { Container } from "./styles";

interface HeaderProps {
  switchTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ switchTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <img src={theme.title === 'dark' ? logoDark : logo} alt="logo" />

      <Switch
        checked={theme?.title === "light"}
        onChange={switchTheme}
        size={50}
      />
    </Container>
  );
};

export default Header;
