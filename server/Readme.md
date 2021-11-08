## user signup - http://localhost:8080/api/user/register

data:{
name: "",
email,
phoneNumber,
userType,
gender,
password,
age,
}

## user login - http://localhost:8080/api/user/login

data:{
email,
password
}

## create survey - http://localhost:8080/api/survey/create-survey

    data :{
          title,
          forUserType,
          forUserValue,
          questions,
          createdBy,
          userType,

}

## submission status - http://localhost:8080/api/submission/submission-status

data:{surveyId}

## submit survey - http://localhost:8080/api/submission/submit-survey

data:{
userId: userId,
surveyId: forms.\_id,
answers: answers,
}

## getAllSurvey - http://localhost:8080/api/survey/get-all-survey

data:{
userId
}
