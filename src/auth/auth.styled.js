import styled from "styled-components";

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    width: 48%;
    height: 60%;
    border-radius: 25px;
    display: flex;
    box-shadow: 2px 2px 2px 2px rgb(179, 179, 179);
` 

export const SubBox_Left = styled.div`
    width: 50%;
    height: 100%;
    background-color: #FFE483;
    border-radius: 25px 0px 0px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubBox_Right = styled.div`
    width: 50%;
    height: 100%;
    background-color: #F5F5F5;
    border-radius: 0px 25px 25px 0px;
`

export const Input = styled.input`
    width: 65%;
    height: 8%;
    margin-bottom: 20px;
    border-radius: 25px;
    padding-left: 13px;
    font-size: 13px;
    outline: 0;
    border: 0;
    padding-left: 15px;
    /* border-right: #E8E1F3 2px solid;
    border-left: #E8E1F3 2px solid;
    border-top: #E8E1F3 2px solid;
    border-bottom: #E8E1F3 2px solid; */
`

export const Button = styled.button`
    width: 65%;
    height: 8%;
    font-size: 15px;
    margin-top: 25px;
    margin-bottom: 15px;
    border-radius: 25px;
    border: 0;
    outline: 0;
    background-color: #B4B4B4;
    color: #FFFFFF;

    &:hover{  
        background-color : #7D7D7D;
    }
`

export const Title = styled.h1`
    font-size: 30px;
    color: #000000;
    font-weight: bold;
    margin-top: 80px;
    margin-bottom: 80px;
    
`

export const Sub = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 70px;
`

export const A = styled.a`
    font-size: 14px;
    color: #B4B4B4;
`