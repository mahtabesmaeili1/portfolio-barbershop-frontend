import Services from "../components/Services";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <Container>
      <h3>Hello there 👋</h3>
      <p>General information:</p>
      <Services />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
