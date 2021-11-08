import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";

const Container = styled.div``;
const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
export const SurveyCard = styled.div`
  width: 200px;
  height: auto;
  padding: 20px;
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 10px;
  cursor: pointer;
`;
const Response = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const RespondantHomePage = () => {
  const history = useHistory();
  const [allSurvey, setAllSurvey] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let gender = localStorage.getItem("userGender");
      let age = localStorage.getItem("userAge");
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/survey/get-survey",
        data: { gender: gender, age: age },
      });
      console.log(result);
      setAllSurvey(result.data);
    };
    getData();
  }, []);

  return (
    <Container>
      <Title>All survey for you</Title>
      {allSurvey.map((item, index) => (
        <SurveyCard
          onClick={() =>
            history.push({
              pathname: "/fill-survey",
              state: { item },
            })
          }
        >
          <Title>{item.title}</Title>
          <Response>Take survey</Response>
        </SurveyCard>
      ))}
    </Container>
  );
};

export default RespondantHomePage;
