import { useContext } from "react";
import { ResultContext } from "../../contexts/result";
import { Container } from "./styles";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";

const SearchResult = () => {
  const { result, showMessage } = useContext(ResultContext);

  const overrRide = css`
    display: block;
    margin: 50px auto;
  `;

  return (
    <Container>
      <BarLoader color='#fcf2f5' css={overrRide} loading={showMessage} />
      {result.status_op ? (
        <p
          style={{
            color: "#fcf2f5",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "3rem",
          }}>
          Processo não encontrado.
        </p>
      ) : (
        <>
          <div className='top-div'>
            <div className='number'>
              {result.numero && <p>Número do processo: {result.numero}</p>}
            </div>
            <div className='instance'>
              {result.instancia && <p>Instância: {result.instancia}</p>}
            </div>
          </div>
          <div className='bottom-div'>
            <div className='parties'>
              <ul>
                {result.partes &&
                  result.partes.map((party, index) => {
                    if (party[10]) {
                      return (
                        <li
                          key={index}
                          style={{
                            lineHeight: "20px",
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
              <div className='defendant'>
                <ul>
                  {result.partes &&
                    result.partes.map((party, index) => {
                      if (party[12]) {
                        return (
                          <li
                            key={index}
                            style={{
                              lineHeight: "20px",
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
            <div className='movs'>
              <ul>
                {result.movs &&
                  result.movs.map((mov, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          lineHeight: "20px",
                          maxWidth: "50%",
                        }}>
                        <p>{mov[0]}</p>
                        <p>{mov[1]}</p>
                        <p>{mov[2]}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default SearchResult;
