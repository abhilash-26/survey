import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import axios from "axios";

const Container = styled.div``;
const Button = styled.button`
  background-color: orange;
  border: none;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const FillSurvey = () => {
  const location = useLocation();
  const [answers, setAnswers] = useState([]);
  const forms = location.state.item;
  console.log(forms);

  const handleChange = (e, index) => {
    let answ = [...answers];
    answ[index] = e.target.value;
    setAnswers(answ);
    console.log(answers);
  };

  const handleSubmit = async () => {
    let userId = localStorage.getItem("userId");
    const result = await axios({
      method: "post",
      url: "http://localhost:8080/api/submission/submit-survey",
      data: {
        userId: userId,
        surveyId: forms._id,
        answers: answers,
      },
    });
    console.log(result);
  };

  return (
    <Container>
      <h1>{forms.title}</h1>
      {forms.questions.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <input onChange={(e) => handleChange(e, index)} />
        </div>
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default FillSurvey;
