import React from "react";
import { useEffect ,useState} from "react/cjs/react.development";
import { Container,ButtonStyle} from "../styles/Container.style";
import { List,Content } from "../styles/ViewHighscores.style";
import { Link,useNavigate } from "react-router-dom";
import Header from "./Header";


function ViewHighscores() {
  const navigate = useNavigate();
const [usernames,setUsername]= useState();

const clearHighScore=()=>{
localStorage.clear();

navigate('/highscore')
}
 useEffect(()=>{

const u=localStorage.getItem("users");
setUsername(JSON.parse(u));

 },[])

  return (
    <Container>
    <Header/>
      <Content>
        <h1>Highscores</h1>
        <ul>
          {usernames?.map((user, index) => (
            <List key={index}>
               {user.name} - {user.score}
            </List>
          ))}
        </ul>
        <Link to="/">
          <ButtonStyle>Go Back</ButtonStyle>
        </Link>{" "}
        <ButtonStyle onClick={()=>clearHighScore()}>Clear Highscores</ButtonStyle>
      </Content>
    </Container>
  );
}

export default ViewHighscores;
