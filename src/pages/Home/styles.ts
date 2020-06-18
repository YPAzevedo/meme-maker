import styled, { keyframes } from "styled-components";

interface DefaultTheme {
  theme: {
    title: string;
    colors: {
      primary: string;
      header: string;
      background: string;
      background2: string;
      background3: string;
      text: string;
    };
  };
}

const fadeInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translatex(-30px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 0.7s ${fadeInFromLeft} ease;

  > img {
    margin-top: 50px;
  }
`;

export const GeneratedMeme = styled.div`
  animation: 0.7s ${fadeInFromLeft} ease;
`;

export const PreviewMeme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  min-height: 200px;

  margin-top: 30px;

  img {
    animation: 0.7s ${fadeInFromLeft} ease;
  }
`;

export const Card = styled.div`
  background: ${(props: DefaultTheme) => props.theme.colors.background2};
  width: 550px;
  padding: 24px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.198836);
  border-radius: 8px;
  margin-bottom: 50px;

  h2 {
    animation: 0.7s ${fadeInFromLeft} ease;
    font-size: 22px;
    color: ${(props: DefaultTheme) => props.theme.colors.text};
    margin-bottom: 16px;
  }
`;

export const Templates = styled.div`
  background: ${(props: DefaultTheme) => props.theme.colors.background3};
  display: flex;
  height: 90px;
  width: 100%;
  overflow-y: auto;
  border-radius: 8px;
  align-items: center;
  padding: 0 8px;

  animation: 0.7s ${fadeInFromBottom} ease;

  button {
    border: 0;
    background: transparent;
    margin-right: 10px;

    &.selected-template {
      border: 2px solid ${(props: DefaultTheme) => props.theme.colors.primary};
    }

    img {
      width: 53px;
      height: 53px;
    }
  }
`;

export const Form = styled.form`
  animation: 0.7s ${fadeInFromBottom} ease;

  input {
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${(props: DefaultTheme) => props.theme.colors.background};
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
    background: ${(props: DefaultTheme) => props.theme.colors.background3};

    &::placeholder {
      color: ${(props: DefaultTheme) => props.theme.colors.text};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: ${(props: DefaultTheme) => props.theme.colors.primary};
  color: #FFFFFF;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  transition: background 0.2s ease-in;

  &:hover {
    background: #d85815;
  }
`;
