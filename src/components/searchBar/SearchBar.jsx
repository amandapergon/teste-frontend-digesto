import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { SearchBarContainer, LogoContainer } from "./styles";

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

const token = "2a13ae70-a928-4fc8-ad08-91132322a603";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    reset();
  };

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
          {/* <p>{errors.cnj?.message}</p> */}
        </div>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
