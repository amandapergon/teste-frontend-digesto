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
        <div>
          <ul>
            {result.partes &&
              result.partes.map((party, index) => {
                if (party[12]) {
                  return (
                    <li
                      key={index}
                      style={{
                        backgroundColor: "white",
                        margin: "2px",
                        color: "#5f0c16",
                      }}>
                      <h3
                        style={{
                          textTransform: "capitalize",
                        }}>
                        {party[8].toLowerCase()}
                      </h3>
                      <h4
                        style={{
                          textTransform: "capitalize",
                        }}>
                        {party[2].toLowerCase()}
                      </h4>
                      <h5>Advogados:</h5>
                      {party[9].map((lawyer, index) => {
                        return (
                          <p
                            key={index}
                            style={{
                              textTransform: "capitalize",
                            }}>
                            {lawyer[1].toLowerCase()}
                          </p>
                        );
                      })}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
        <div className='bottom-div'>
          <div className='movs'>
            <ul>
              {result.movs &&
                result.movs.map((mov, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        backgroundColor: "white",
                        margin: "2px",
                        color: "#5f0c16",
                      }}>
                      <p>{mov[0]}</p>
                      <p>{mov[1]}</p>
                      <p>{mov[2]}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className='parties'>
            <ul>
              {result.partes &&
                result.partes.map((party, index) => {
                  if (party[10]) {
                    return (
                      <li
                        key={index}
                        style={{
                          backgroundColor: "white",
                          margin: "2px",
                          color: "#5f0c16",
                        }}>
                        <h3
                          style={{
                            textTransform: "capitalize",
                          }}>
                          {party[8].toLowerCase()}
                        </h3>
                        <h4
                          style={{
                            textTransform: "capitalize",
                          }}>
                          {party[2].toLowerCase()}
                        </h4>
                        <h5>Advogados:</h5>
                        {party[9].map((lawyer, index) => {
                          return (
                            <p
                              key={index}
                              style={{
                                textTransform: "capitalize",
                              }}>
                              {lawyer[1].toLowerCase()}
                            </p>
                          );
                        })}
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchResult;
