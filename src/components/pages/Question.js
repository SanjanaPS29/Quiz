import React, { useEffect, useState,useContext } from "react";
import { Container,Content,ParaStyle } from "../styles/Container.style";
import { OptionStyle, ListStyle, HiddenStyle } from "../styles/Question.style";
import { questions } from "../../quiz";


function Question({
  data,
  score,
  setScore,
  setStop,
  setQuestionNumber,
  questionNumber,
  setTimer,
  time
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
useEffect(()=>{
  if(time<=0){
    setStop(true);
    setTimer(null);
  }

},[time])



function set(){
     setQuestionNumber((prev) => prev + 1);
        setCorrect(null);
        
     if(data[questionNumber] == null){
      setTimer(null);
   setStop(true);
    }
}
  const checkAnswer = (opt) => {
    const choose = opt.option;

     if (choose == question.answer) {
      setCorrect("Correct!");
      
   
      const ti=setTimeout(() => {
        set();
        setScore(score + 1);
      }, 200);
     
    } else {
    setTimer(time-10)
      setCorrect("Incorrect!");
           
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
