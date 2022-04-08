import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { SearchBarContainer, LogoContainer } from "./styles";
import { ResultContext } from "../../contexts/result";

import DigestoLogo from "../../assets/DigestoLogo.png";

const schema = yup.object().shape({
  cnj: yup
    .string()
    .required("Por favor, insira um CNJ")
    .matches(
      "[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9]{1}.[0-9]{2}.[0-9]{4}",
      "Formato inválido. Verifique o número CNJ"
    ),
});

const SearchBar = () => {
  const { handleSearch } = useContext(ResultContext);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <SearchBarContainer>
      <LogoContainer src={DigestoLogo} />
      <form onSubmit={handleSubmit(handleSearch)}>
        <div class='input-container'>
          <input
            class='input-class'
            placeholder='Número CNJ'
            type='text'
            {...register("cnj")}
          />
          <button type='submit'>Buscar</button>
        </div>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
