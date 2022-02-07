import React, { useEffect, useState } from "react";
import { Content, ParaStyle } from "../styles/Container.style";
import { OptionStyle, ListStyle} from "../styles/Question.style";

function Question({
  data,
  score,
  setScore,
  setStop,
  setQuestionNumber,
  questionNumber,
  setTimer,
  time,
}) {
  const [correct, setCorrect] = useState();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  useEffect(() => {
    if (time <= 0) {
      setStop(true);
      setTimer(null);
    }
  }, [time]);

  function set() {
    setQuestionNumber((prev) => prev + 1);
    setCorrect(null);

    if (data[questionNumber] == null) {
      setTimer(null);
      setStop(true);
    }
  }
  const checkAnswer = (opt) => {
    const choose = opt.option;

    if (choose === question.answer) {
      setCorrect("Correct!");

      setTimeout(() => {
        set();
        setScore(score + 1);
      }, 200);
    } else {
      setCorrect("Incorrect!"); 
        setTimer(time - 10);
     
      setTimeout(()=>{
        set();
      },200)
    
     
    }
  };

  return (
    <Content>
      <h2>{question?.questionText}</h2>
      <ListStyle>
        {question?.options.map((option, index) => (
          <OptionStyle key={index} onClick={(e) => checkAnswer({ option })}>
            {option}
          </OptionStyle>
        ))}
        <hr />
        <ParaStyle>{correct}</ParaStyle>
      </ListStyle>
    </Content>
  );
}

export default Question;
