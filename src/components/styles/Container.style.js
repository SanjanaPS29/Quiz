import styled from "styled-components";

export const Container=styled.div` 
align-items:center;

`


export const Content = styled.div`
  width:60%;
  border: 3px solid #d5dbd6;
  border-radius: 25px;
  padding:0px;
  box-shadow: 8px 5px hsl(0deg 2% 81% / 36%), 10px 5px hsl(0deg 13% 82% / 0%);
margin:60px 250px;
padding:40px;
  p {
    font-weight: 500;

    font-family: Verdana;
    font-size: 16px;
    font-height: normal;
    font-style: normal;
    color: #000000;
  }

  button {
    background-color: #218380;
    border-radius: 5px;
    height: 40px;
    color: #fff;
    border: none;
    padding: 10px;
    cursor:pointer;
    margin:0px 10px;
  }
  input{
    padding:8px 2px;
    border:1px solid #d5dbd6;
  }

  label{
    margin:auto 5px;
  }
`;

// export const Content = styled.div`
//   justify-content: center;
//   align-items: center;
// `;
