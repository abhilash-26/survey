import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const SubmissionPage = () => {
  const location = useLocation();
  const survey = location.state.item;
  const [submissions, setSubmissions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/submission/submission-count",
        data: { surveyId: survey._id },
      });
      setSubmissions(result.data);
      console.log(result);
    };
    getData();
  }, []);

  console.log(survey);
  return (
    <Container>
      <button onClick={() => history.push("/home")}>Go to home</button>
      <table>
        <tr>
          {survey.questions.map((item) => (
            <th
              style={{
                paddingRight: "20px",
                border: "1px solid red",
              }}
            >
              {item}
            </th>
          ))}
        </tr>
        {submissions.map((item) => (
          <tr>
            {item.answers.map((inner) => (
              <td>{inner}</td>
            ))}
          </tr>
        ))}
        {submissions.length == 0 && <h3>No submissions yet!</h3>}
      </table>
    </Container>
  );
};

export default SubmissionPage;
