import { useState, createContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ResultContext = createContext({});

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState({});
  const [showResult, setShowResult] = useState(false);
  const { reset } = useForm({});
  const token = "ffa57f89-c29d-4341-a05e-d30872961782";

  const handleSearch = ({ cnj }) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://op.digesto.com.br/api/tribproc/${cnj}?tipo_numero=8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setResult(response.data);
        console.log(result);
      })
      .catch((error) => console.log(error));
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
