import styled from 'styled-components';

export const Content=styled.div` 
 max-width:25rem;
  border: 3px solid #d5dbd6;
  border-radius: 25px;
  padding:0px;
  box-shadow: 8px 5px hsl(0deg 2% 81% / 36%), 10px 5px hsl(0deg 13% 82% / 0%);
margin-inline:auto;
margin-top:5em;
padding:2em;

@media (max-width:500px)
{
	margin-inline:1em;
}
`
export const List=styled.li` 
list-style:number;

`