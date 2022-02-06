import React, { useState, useEffect,createContext} from "react";
import { questions } from "../../quiz";
import { Time } from "../styles/Header.style";
import Question from "./Question";
import Result from "./Result";
import Header from "./Header";
import { Container} from "../styles/Container.style";

export const TimeContext=createContext();
function Questions() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  
  const handleScore = () => {
    setScore(score + 1);
  };
 
   const [time,setTimer]= useState(50);
useEffect(()=>{

 const interval = setInterval(() => {
     if(!stop) {setTimer((prev) => prev - 1);}
 }, 1000) ;
 return ()=>clearInterval(interval);
  
     if(stop){
      console.log("hiiii")
  }
},[stop])

  return (
    <Container>
   <TimeContext.Provider value={time}> <Header/></TimeContext.Provider>
      <div>
      {stop ? (

        <Result highScore={score}/>
      ) : (
        <>
          {
            <Question
              data={questions}
              questionNumber={questionNumber}
              score={score}
              setScore={setScore}
              setStop={setStop}
              setQuestionNumber={setQuestionNumber}
              setTimer={setTimer}
              time={time}
            />
          }
        </>
      )}
          </div>
    </Container>
  );
}

export default Questions;

