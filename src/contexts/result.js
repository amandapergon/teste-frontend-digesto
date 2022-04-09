import { useState, createContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ResultContext = createContext({});

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState({});
  const [showResult, setShowResult] = useState(false);
  const { reset } = useForm();

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
        console.log(result);
      })
      .catch((error) => console.log(error));
    reset();
  };

  return (
    <ResultContext.Provider
      value={{
        result,
        setResult,
        showResult,
        setShowResult,
        handleSearch,
      }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
