import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 25vh;
  background-color: #fcf2f5;

  .input-container {
    align-items: center;
    margin-top: 2vh;
    height: fit-content;
    width: fit-content;
    display: flex;
    margin: 15px 3px 15px 0;
  }

  @media screen and (min-width: 768px) {
    .input-container {
      display: flex;
      flex-direction: row;
    }
  }

  input {
    height: 2.5rem;
    width: 100%;
    border: 2px solid #5f0c16;
    border-radius: 3px;
    display: block;
    margin: 5px;
  }

  form {
    position: relative;
  }

  .error-message {
    position: absolute;
    bottom: 0.6px;
    color: #5f0c16;
    margin-left: 0.8rem;
  }

  input:focus {
    outline: none !important;
    border-color: #920606;
  }

  .input-class {
    padding-left: 10px;
    font-size: 16px;
  }

  button {
    height: 2.5rem;
    margin: 0 auto;
    border: 2px solid #5f0c16;
    border-radius: 3px;
    color: #efefef;
    background-color: #5f0c16;
    font-size: 16px;
  }

  button:hover {
    background-color: #840303;
  }

  @media screen and (min-width: 768px) {
    .input-container {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const LogoContainer = styled.img`
  width: 15rem;
  margin: 10px auto;
`;
