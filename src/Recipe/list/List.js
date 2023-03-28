import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as L from './List.styled';

import Server from '../../config/server.json'

function List(){

    let [name, setName] = useState('');

    let [title, setTitle] = useState(['a', 'b', 'c', 'd', 'e','f','g'])

    let [text, setText] = useState(['설명1', '설명2', '설명3','설명4','설명5','설명6','설명7'])

    let navigate = useNavigate();

    return (
        <L.Main>
            {
                title.map((a, i)=>{
                    return <L.ListBox>
                    <L.Title>a</L.Title> 
                    <L.Text>{text[i]}</L.Text>
                    </L.ListBox>
                })
            }
        </L.Main>
    )
}

export default List;