import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as F from './Footer.styled';

import Server from '../../config/server.json';

const ignore = ['/login', '/register'];

function Footer(){

    const[footerLink, setFooterLink] = useState([
        {
            name: 'home', link: 'home'
        },
        {
            name: 'write', link: 'write'
        },
        {
            name: 'list', link: 'list'
        }
    ])

    const {pathname} = useLocation();

    let navigate = useNavigate();

    if(ignore.includes(pathname)){
        return null;
    }

    return(
        <div>
            <F.Main>
                <F.MainPart>
                    <F.Button><a href='https://github.com/oheunji05'>Git</a></F.Button>
                    <F.Button><a href='https://blog.naver.com/eunjijjang05'>Blog</a></F.Button>
                    <F.Button><a href='https://www.notion.so/31ba763290644a43abe84c77e67bf57f'>Notion</a></F.Button>
                
                    <F.text1>3203 오은지</F.text1>
                    <F.text1>프로그래밍 실습 과제</F.text1>
                    <F.text2>대구소프트웨어마이스터고등학교</F.text2>
                </F.MainPart>
                
            </F.Main>
        </div>
    );
}

export default Footer;