import { useState, createContext } from "react";
import axios from "axios";

export const ResultContext = createContext({});

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  const handleSearch = ({ cnj }) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://op.digesto.com.br/api/tribproc/${cnj}?tipo_numero=8`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          },
        }
      )
      .then((response) => {
        setResult(response.data);
        setShowMessage(false);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchingMessage = () => {
    setShowMessage(true);
  };

  return (
    <ResultContext.Provider
      value={{
        result,
        setResult,
        showMessage,
        handleSearchingMessage,
        handleSearch,
      }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
