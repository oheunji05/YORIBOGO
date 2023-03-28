import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

import * as L from './auth.styled.js';

import Image from '../image/cook.webp';

import Server from '../config/server.json';

function Login() {

    let [name, setName] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate();

    return (
        <L.Main>
            <L.Box>
                <L.SubBox_Left>
                    <img className='auth-img' src={Image} width='100%' height='100%'></img>
                </L.SubBox_Left>

                <L.SubBox_Right>

                    <L.Title>LOGIN</L.Title>

                    <L.Input placeholder="이름을 입력하세요" onChange={(e)=>{
                        setName(e.target.value)
                    }}></L.Input>

                    <br/>

                    <L.Input placeholder="비밀번호를 입력하세요" type='password' onChange={(e)=>{
                        setPassword(e.target.value)
                    }}></L.Input>

                    <br/>

                    <L.Button onClick={()=>{
                        axios.post(`${Server.server}/auth/sign-in`,{userName:name, userPassword:password})
                        .then((result)=>{
                            alert('로그인에 성공하였습니다.')
                            localStorage.setItem("userName", result.data);
                            navigate('/home')
                        })
                        .catch((result)=>{alert('로그인에 실패하였습니다.')})
                    }}>로그인</L.Button>

                    <br/>
                    
                    <L.Sub>
                        <L.A href="/register">회원가입</L.A>
                    </L.Sub>
                    
                </L.SubBox_Right>

            </L.Box>
        </L.Main>
    );
}

export default Login;
