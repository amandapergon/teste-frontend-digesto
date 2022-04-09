import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .top-div {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #fcf2f5;
    font-size: 25px;
  }

  .bottom-div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #fcf2f5;
    font-size: 16px;

    .movs {
      padding: 15px;
    }

    .parties {
      padding: 15px;
    }
  }
}
`;

export const Movs = styled.div`
  padding: 10px;
`;
