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
  const [text, setText] = useState(false);
  let flag=false;
  const onSubmit = (e) => {
    e.preventDefault();
    if (name != null || "") {
      const user = { name: name, score: highScore };
      const data = localStorage.users;
      if (data == null) {
        localStorage.setItem("users", "[]");
      }
      function addNewUser() {
        old.push(user);
        localStorage.setItem("users", JSON.stringify(old));
        navigate("/highscore");
      }
      const old = JSON.parse(localStorage.getItem("users"));
      // check if the user already exist
      if (Object.keys(old).length === 0) {
        addNewUser();
      } else {
        old.forEach((element) => {
          if (element.name === name) {
           flag=true;
           setText(true);
          }
        });
      }
      // if (!flag) {
      //   addNewUser();
      // }
    }
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setShow(true);
  }, [text]);

  return (
    <>
      <Container style={{ display: show ? "block" : "none" }}>
        <Content>
          <form>
            <h1>All done!</h1>
            <h4 style={{ display: text ? "block" : "none", color: "red" }}>
              UserName already exist . Please choose another name.
            </h4>
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



/*
const onSubmit = (e) => {
    e.preventDefault();
    if (name != null || "") {
      const user = { name: name, score: highScore };
      const data = localStorage.users;
      if (data == null) {
        localStorage.setItem("users", "[]");
      }
  
      function addNewUser(){
        old.push(user);
        localStorage.setItem("users", JSON.stringify(old));
      
      }
      const old = JSON.parse(localStorage.getItem("users"));
      // check if the user already exist
      if (Object.keys(old).length === 0) {
        addNewUser();
      } else {
        old.forEach((element) => {
          if (element.name === name) { 
            flag=true;
          }
        });
      }
      if (!flag) {
        console.log(flag)
        navigate("/highscore");
      }
    }

  
  };

*/