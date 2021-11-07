import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  width: max-content;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;
`;
const RowWrapper = styled.div``;
const AllSurveyTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Home = () => {
  const [allSurvey, setAllSurvey] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("userId");
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/survey/get-all-survey",
        data: { userId: userId },
      });
      console.log(result);
      setAllSurvey(result.data);
    };
    getData();
    const getCount = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/submission/submission-count",
        data: { surveyId: surveyId },
      });
      console.log(result);
    };
    getCount();
  }, []);
  const handleLogout = () => {};
  return (
    <Container>
      <Button>Create survey</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <RowWrapper>
        <AllSurveyTitle>All survey </AllSurveyTitle>
        {allSurvey.map((item, index) => (
          <p>
            <StyledLink>{item.title}</StyledLink>
          </p>
        ))}
      </RowWrapper>
    </Container>
  );
};

export default Home;
