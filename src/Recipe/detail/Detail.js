import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as D from './Detail.styled';

import Server from '../../config/server.json'

function Detail(){

    let [name, setName] = useState('');

    let navigate = useNavigate();

    return (
        <div>

        </div>
    )
}

export default Detail;