import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as W from './Write.styled';

import Server from '../../config/server.json'

function Write(){

    let [name, setName] = useState('');

    let navigate = useNavigate();

    return (
        <W.Main>
            <W.Box>
                <W.Input></W.Input>
                <W.SubPart>
                    <W.SubInput></W.SubInput>
                    <W.SubInput></W.SubInput>
                    <W.SubInput></W.SubInput>
                </W.SubPart>
                
                <W.Input></W.Input>
                <W.Input></W.Input>
                <W.Input></W.Input>
            </W.Box>
        </W.Main>
    )
}

export default Write;