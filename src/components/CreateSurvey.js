import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  margin-top: 30px;
`;
const Input = styled.input`
  width: max-content;
  margin-bottom: 10px;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label``;

const AddButton = styled.button`
  border: none;
  background-color: orange;
  border-radius: 5px;
  width: auto;
  padding: 10px;
  cursor: pointer;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;
const Option = styled.option``;

const CreateSurvey = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestion] = useState([""]);
  const [forUserType, setForUserType] = useState("");
  const [forUserValue, setForUserValue] = useState("");
  const createdBy = localStorage.getItem("userId");
  const userType = localStorage.getItem("userType");

  const handleChange = (e, index) => {
    let toChange = [...questions];
    toChange[index] = e.target.value;
    setQuestion(toChange);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleUserType = (e) => {
    setForUserType(e.target.value);
  };

  const handleUserValue = (e) => {
    setForUserValue(e.target.value);
  };

  const addQuestion = () => {
    setQuestion([...questions, ""]);
  };
  const generateSurvey = async () => {
    if (forUserType == "" || forUserValue == "" || title == "") {
      console.log(forUserValue, forUserType);
      alert("Fill all the fields");
    } else {
      const result = await axios({
        method: "post",
        url: "http://localhost:8080/api/survey/create-survey",
        data: {
          title,
          forUserType,
          forUserValue,
          questions,
          createdBy,
          userType,
        },
      });
      console.log(result);
      if (result.data.status == 0) {
        alert("created sucessfully");
      }
    }
  };

  return (
    <Container>
      <RowWrapper>
        <Label>Title</Label>
        <Input value={title} onChange={handleTitle} />
      </RowWrapper>
      <RowWrapper>
        <Label>For:-</Label>
        <Select onChange={handleUserType}>
          <Option disabled>select a category</Option>
          <Option value="G">Gender</Option>
          <Option value="A">Age</Option>
        </Select>
      </RowWrapper>
      {forUserType === "G" && (
        <RowWrapper>
          <Select onChange={handleUserValue}>
            <Option value="">select gender</Option>
            <Option value="M">Male</Option>
            <Option value="F">Female</Option>
          </Select>
        </RowWrapper>
      )}
      {forUserType === "A" && (
        <RowWrapper>
          <Select onChange={handleUserValue}>
            <Option disabled value="">
              select age
            </Option>
            <Option value="10">1-10</Option>
            <Option value="20">11-20</Option>
            <Option value="30">21-30</Option>
            <Option value="40">31-40</Option>
            <Option value="50">41-50</Option>
            <Option value="60">51-60</Option>
          </Select>
        </RowWrapper>
      )}
      <Label>Question:- </Label>
      <RowWrapper>
        {questions.map((item, index) => (
          <Input onChange={(e) => handleChange(e, index)} />
        ))}
      </RowWrapper>
      <RowWrapper>
        <AddButton
          onClick={() => addQuestion()}
          style={{ marginBottom: "10px" }}
        >
          Add another question
        </AddButton>
        <AddButton onClick={() => generateSurvey()}>Generate survey</AddButton>
      </RowWrapper>
    </Container>
  );
};

export default CreateSurvey;
