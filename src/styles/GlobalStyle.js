import styled, { createGlobalStyle } from "styled-components";
import githubIcon from "./github-icon.svg"; // Ensure you have a GitHub icon in your assets

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #fff8f1; /* Light coffee cream background */
    color: #5D4037; /* Rich coffee color for text */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #A1887F #CFD8DC;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #CFD8DC;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #A1887F;
    border-radius: 20px;
  }

  button, input {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: background-color 0.2s, color 0.2s;
  }

  button {
    background-color: #795548; /* Deep coffee color */
    color: #FFFFFF;
    &:hover {
      background-color: #A1887F; /* Lighter coffee shade */
      color: #000000;
    }
  }

  input {
    background-color: #CFD8DC; /* Cream background */
    color: #5D4037; /* Coffee color text */
    border: 1px solid #A1887F;
    &:focus {
      border-color: #8D6E63;
      box-shadow: 0 0 8px #8D6E63;
    }
  }
`;

// Styled Components for the Landing Page
export const StyledContainer = styled.div`
  background-image: url(${githubIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: #fff8f1;
  color: #5d4037;
  padding: 20px;
  box-shadow: inset 0 0 10px #00000050;
`;

export const StyledHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const StyledSubHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  font-weight: normal;
`;

export const SupportNotice = styled.div`
  font-size: 1rem;
  margin-bottom: 30px;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #f0e9e4;
  color: #5d4037;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #5d4037;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #5d4037;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #8d6e63;
  }
`;
export const StyledPre = styled.pre`
  max-height: 400px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
