import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  ButtonStyle,
  InputStyle,
  ParaStyle,
} from "../styles/Container.style";
import { useNavigate } from "react-router-dom";
import { Content } from "../styles/ViewHighscores.style";

function Result({ highScore }) {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name != null || "") {
      const user = { name: name, score: highScore };
      const data = localStorage.users;
      if (data == null) {
        localStorage.setItem("users", "[]");
      }
      const old = JSON.parse(localStorage.getItem("users"));
      old.push(user);

      localStorage.setItem("users", JSON.stringify(old));
      navigate("/highscore");
    }
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Container style={{ display: show ? "block" : "none" }}>
        <Content>
          <form>
            <h1>All done!</h1>

            <ParaStyle>Your final score is {highScore}.</ParaStyle>
            <label>Enter initails:</label>
            <InputStyle
              type="text"
              name="name"
              onChange={(e) => {
                onChange(e);
              }}
            />
            <ButtonStyle onClick={(e) => onSubmit(e)}>Submit</ButtonStyle>
          </form>
        </Content>
      </Container>
    </>
  );
}

export default Result;
