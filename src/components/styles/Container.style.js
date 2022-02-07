import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
`;

export const Content = styled.div`
  width: min(52%, 70.5em);

  border: 3px solid #d5dbd6;
  border-radius: 25px;
  padding: 0px;
  box-shadow: 8px 5px hsl(0deg 2% 81% / 36%), 10px 5px hsl(0deg 13% 82% / 0%);
  margin-inline: auto;

  margin-top: 5em;
  padding: 2em;
  p {
    font-weight: 500;

    font-family: Verdana;
    font-size: 16px;
    font-height: normal;
    font-style: normal;
    color: #000000;
  }
`;

export const ParaStyle = styled.p`
  font-weight: 500;

  font-family: Verdana;
  font-size: 16px;
  font-height: normal;
  font-style: normal;
  color: #000000;
`;

export const ButtonStyle = styled.button`
  background-color: #218380;
  border-radius: 5px;
  height: 40px;
  color: #fff;
  border: none;
  padding: 1em;
  cursor: pointer;
  margin: 1em;
`;
export const InputStyle = styled.input`
  padding: 1em 0.5em;
  border: 1px solid #d5dbd6;
  margin-inline: 0.5em;
`;
