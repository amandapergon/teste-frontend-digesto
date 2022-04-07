import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25vh;
  background-color: #fcf2f5;

  .input-container {
    margin-top: 2vh;
    height: 2.5rem;
    width: 20vw;
    display: flex;
    flex-wrap: nowrap;
  }

  input {
    margin-top: 7vh;
    height: 2.5rem;
    width: 20vw;
    border: 2px solid #5f0c16;
    border-radius: 3px;
    display: block;
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
    margin-top: 7vh;
    height: 2.5rem;
    width: 50%;
    margin-left: 0.5rem;
    border: 2px solid #5f0c16;
    border-radius: 3px;
    color: #efefef;
    background-color: #5f0c16;
    font-size: 16px;
  }

  button:hover {
    background-color: #840303;
  }
`;

export const LogoContainer = styled.img`
  width: 14vw;
  height: 7vh;
  position: absolute;
  left: 20%;
  transform: translateX(150%);
`;
