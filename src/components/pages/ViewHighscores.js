import React from "react";
import { useEffect ,useState} from "react/cjs/react.development";
import { Container ,Content} from "../styles/Container.style";
import { List } from "../styles/ViewHighscores.style";
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
              {index + 1}. {user.name} - {user.score}
            </List>
          ))}
        </ul>
        <Link to="/">
          <button>Go Back</button>
        </Link>{" "}
        <button onClick={()=>clearHighScore()}>Clear Highscores</button>
      </Content>
    </Container>
  );
}

export default ViewHighscores;
