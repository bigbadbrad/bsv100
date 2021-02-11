import styled from "styled-components";

const Container = styled.div`

  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 40em) {
    width: 75%;
  }

  @media screen and (min-width: 52em) {
    width: 50%;
  }
`;

export default Container;
