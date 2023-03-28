import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Main = styled.div`
    width: 100vw;
    height: 250px;
    background-color: black;
    display: flex;
    justify-content: center;
`

export const MainPart = styled.div`
    
`

export const Button = styled.button`
    width: 58px;
    height: 58px;
    border-radius: 50px;
    background-color: white;
    border: 0;
    outline: 0;
    margin-top: 45px;
    margin-bottom: 25px;
    margin-left: 10px;
    margin-right: 10px;
`

export const LinkPart = styled.div`
    
`

export const A = styled(Link)`
  margin-left: 40px;
  margin-right: 40px;
  text-decoration: none;
  &:hover{
    text-decoration:underline;
  }
  font-weight: bold;
  color: #D9D9D9;
`

export const text1 = styled.div`
    color: white;
    font-size: 13px;
`

export const text2 = styled.div`
    margin-top: 10px;
    color: gray;
    font-size: 13px;
`