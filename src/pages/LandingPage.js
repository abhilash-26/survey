import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
  margin-top: 60px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: blue;
  color: white;
  padding: 15px;
  margin-right: 20px;
  cursor: pointer;
`;

const LandingPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => history.push("/login")}>Login</Button>
      <Button onClick={() => history.push("/register")}>Register</Button>
    </Container>
  );
};

export default LandingPage;
