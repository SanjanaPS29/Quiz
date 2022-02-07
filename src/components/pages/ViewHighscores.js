import React from "react";
import { useState ,useEffect} from "react/cjs/react.development";
import { Container, ButtonStyle } from "../styles/Container.style";
import { List, HighScoreContent } from "../styles/ViewHighscores.style";
import { Link } from "react-router-dom";
import Header from "./Header";

function ViewHighscores() {

  const [usernames, setUsername] = useState();

  const clearHighScore = () => {
    localStorage.clear();
  getUsers();
  };

  function getUsers(){
    const u = localStorage.getItem("users");
    setUsername(JSON.parse(u));
  }
 
  useEffect(() => {
    getUsers();
  },[]);

  return (
    <Container>
      <Header />
      <HighScoreContent>
        <h1>Highscores</h1>
        <ul>
          {usernames?.map((user, index) => (
            <List key={index}>
           {index+1}.  {user.name} - {user.score}
            </List>
          ))}
        </ul>
        <Link to="/">
          <ButtonStyle>Go Back</ButtonStyle>
        </Link>{" "}
        <ButtonStyle onClick={() => clearHighScore()}>
          Clear Highscores
        </ButtonStyle>
      </HighScoreContent>
    </Container>
  );
}

export default ViewHighscores;
