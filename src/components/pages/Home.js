import React, { useState, useEffect } from "react";
import { Container, Content,ButtonStyle } from "../styles/Container.style";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  const [show, setShow] = useState();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("questions");
  };

  return (
    <Container>
    <Header/>
      <Content>
        <h2>Coding Quiz Challenge</h2>
        <p>
          Try to answer to following code-related questions within the time
          limit.
        </p>
        <p>
          Keep in mind that incorrect answers will penalize your score/time by
          ten seconds!
        </p>
        <ButtonStyle onClick={(e) => handleClick(e)}>Start Quiz</ButtonStyle>
      </Content>
     
    </Container>
  );
}

export default Home;
