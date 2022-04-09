import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  height: fit-content;

  .top-div {
    max-width: 100vw;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fcf2f5;
    font-size: 20px;
    line-height: 30px;
  }

  .bottom-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .parties {
    padding: 15px;
    width: 50%;
    color: #fcf2f5;
    display: flex;
    justify-content: space-evenly;

  }

  .defendant {
    display: flex;
    justify-content: flex-end;
  }

  .movs {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    color: #fcf2f5;
    font-size: 16px;
  }
}
`;
