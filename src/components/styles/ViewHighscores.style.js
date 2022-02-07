import styled from "styled-components";

export const Content = styled.div`
  max-width: 30rem;
  border: 3px solid #d5dbd6;
  border-radius: 25px;
  padding: 0px;
  box-shadow: 10px 4px 5px #d5dbd6;
  margin-inline: auto;
  margin-top: 5em;
  padding: 2em;
 
  @media (max-width: 500px) {
    margin-inline: 1em;
  
  }
`;
export const List = styled.li`
  list-style: none;
`;


export const HighScoreContent=styled(Content)`
max-width:20em;
padding-right:0em;
padding-left:3em;
`
