import styled, { keyframes } from "styled-components";

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 0.7s ${fadeInFromLeft} ease;
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

  img {
    animation: 0.7s ${fadeInFromLeft} ease;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  width: 550px;
  padding: 24px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.198836);
  border-radius: 8px;
  margin-top: 16px;

  h2 {
    animation: 0.7s ${fadeInFromLeft} ease;
    font-size: 22px;
    color: #392d2d;
    margin-bottom: 16px;
  }
`;

export const Templates = styled.div`
  background: #eeeeee;
  display: flex;
  height: 90px;
  width: 100%;
  overflow-y: auto;
  border-radius: 8px;
  align-items: center;
  padding: 0 8px;

  margin-bottom: 30px;
  animation: 0.7s ${fadeInFromBottom} ease;

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    border: 0;
    background: transparent;
    margin-right: 10px;

    &.selected-template {
      border: 2px solid #4395d8;
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
    border: 1px solid #dbdbdb;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #4395d8;
  color: #ffffff;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
  transition: background 0.2s ease-in;

  &:hover {
    background: #3672a3;
  }
`;
