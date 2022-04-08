import { useContext } from "react";
import { ResultContext } from "../../contexts/result";
import { Container } from "./styles";

const SearchResult = () => {
  const { result } = useContext(ResultContext);

  return (
    <div>
      <Container>
        <div className='top-div'>
          <div className='number'>
            <p>{result.numero}</p>
          </div>
          <div className='instance'>
            <p>{result.instancia}</p>
          </div>
        </div>
        <div className='bottom-div'>
          <div className='movs'>{result.movs}</div>
          <div className='parties'>
            <div>{result.partes}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResult;
