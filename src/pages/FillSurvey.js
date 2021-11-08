import React, { useEffect, useState } from "react";
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
  const [status, setStatus] = useState(false);
  const forms = location.state.item;

  useEffect(() => {
    const getResponseStatus = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/submission/submission-status",
        data: { surveyId: forms._id },
      });
      console.log(result);
      if (result.data.status == 0) {
        setStatus(true);
      }
    };
    getResponseStatus();
  }, []);
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
      {!status && <h2>Survey already filled can't fill twice</h2>}
      {forms.questions.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          <input
            onChange={(e) => handleChange(e, index)}
            readOnly={status ? "" : "true"}
          />
        </div>
      ))}
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default FillSurvey;
