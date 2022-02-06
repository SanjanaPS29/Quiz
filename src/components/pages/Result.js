import React from "react";
import { useState, useEffect} from "react";
import { Content,Container } from "../styles/Container.style";
import { useNavigate } from "react-router-dom";

function Result({highScore}) {
 
   const [name, setName] = useState("");
   const navigate = useNavigate();
   const[show,setShow]=useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
const user={"name":name,"score":highScore};
const data=localStorage.users;
if(data==null){
  localStorage.setItem("users",'[]')
}
const old=JSON.parse(localStorage.getItem("users"))
old.push(user);

localStorage.setItem("users",JSON.stringify(old))


     navigate("/highscore");
  };
const goHome=()=>{
  navigate("/");
}

const goHighscores=()=>{
  navigate("/highscore")
}
  const onChange = (e) => {
    setName(e.target.value);
  };

    useEffect(() => {
    setShow(true);
  }, []);

  return (
<>
 

    <Container style={{ display:show?"block":"none" }}>
      <Content>
        <form>
          <h2>All done!</h2>

          <p>Your final score is {highScore}.</p>
          <label>Enter initails:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              onChange(e);
            }}
          />
          <button onClick={(e)=>onSubmit(e)}>Submit</button>
        </form>
      </Content>
    </Container>

    </>
  );
}

export default Result;
