import React from "react";
import {
  Grid,
  Typography,
  FormGroup,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";

import * as quiz from "../../utils/ReadingQuizzes/algoQuizArrays";

const getGeneralArray = (sectionNum) => {
  switch (sectionNum) {
    case 0:
      return quiz.insertionGeneralQuiz;
    case 1:
      return quiz.selectionGeneralQuiz;
    case 2:
      return quiz.mergeGeneralQuiz;
    case 3:
      return quiz.quickGeneralQuiz;
    default:
      return null;
  }
};

const getCodeArray = (sectionNum) => {
  switch (sectionNum) {
    case 0:
      return quiz.insertionCodeQuiz;
    case 1:
      return quiz.selectionCodeQuiz;
    case 2:
      return quiz.mergeCodeQuiz;
    case 3:
      return quiz.quickCodeQuiz;
    default:
      return null;
  }
};

const getQuestionArray = ({ subsectionIndex, sectionNum, isAlgo }) => {
  if (isAlgo) {
    if (subsectionIndex === 0) {
      return getGeneralArray(sectionNum);
    }
    return getCodeArray(sectionNum);
  } else {
  }
};

const QuizModal = ({ userAnswers, checkboxQuestion, subsectionIndex, sectionNum, isAlgo }) => {
  const questionArray = getQuestionArray({ subsectionIndex, sectionNum, isAlgo });
  const answerQuestion = (e) => {
    userAnswers[e.target.name] = questionArray[e.target.name].options[e.target.value].correct;
  };
  const answerQuestionCheckBox = (e) => {
    checkboxQuestion[e.target.value] = !checkboxQuestion[e.target.value];
    let isWrong = false;
    questionArray[e.target.name].options.map((option, index) => {
      if (!(option.correct === checkboxQuestion[index])) {
        isWrong = true;
      }
      return isWrong;
    });
    userAnswers[e.target.name] = !isWrong;
  };

  return (
    <Grid container sx={{ justifyContent: "center", textAlign: "center" }}>
      {questionArray.map((question, index) => (
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          key={index}
          sx={{
            minHeight: "250px",
            border: "1px solid black",
            p: 2,
            m: 1,
          }}
        >
          <Typography variant="h6" sx={{ borderBottom: "1px solid black" }}>
            {question.question}
          </Typography>
          <FormControl sx={{ marginTop: 2 }}>
            {question.type ? (
              <FormGroup>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={
                      <Checkbox onChange={(e) => answerQuestionCheckBox(e)} name={`${index}`} />
                    }
                    label={<Typography variant="h6">{option.answer}</Typography>}
                    sx={{
                      marginLeft: 0,
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#a3bcd6",
                      },
                      // backgroundColor: option.correct ? "#85f279" : "#f29979",
                      borderRadius: "10px",
                      transition: "all 0.15s ease",
                    }}
                  />
                ))}
              </FormGroup>
            ) : (
              <RadioGroup name={`${index}`} onChange={answerQuestion}>
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={<Radio />}
                    label={<Typography variant="h6">{option.answer}</Typography>}
                    sx={{
                      marginLeft: 0,
                      p: 1,
                      "&:hover": {
                        backgroundColor: "#a3bcd6",
                      },
                      // backgroundColor: option.correct ? "#85f279" : "#f29979",
                      borderRadius: "10px",
                      transition: "all 0.15s ease",
                    }}
                  />
                ))}
              </RadioGroup>
            )}
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizModal;
