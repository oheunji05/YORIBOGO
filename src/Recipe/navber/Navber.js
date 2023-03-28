import * as N from "./Navber.styled.js";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';

const ignore = ['/', '/login', '/register'];

function Navber(){

    const {pathname} = useLocation();

    if(ignore.includes(pathname)){
        return null;
    }

    else{
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/home">요리보고</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/write">레시피 작성</Nav.Link>
                        <Nav.Link href="/list">레시피 보기</Nav.Link>
                    </Nav>
                    
                    </Container>
                </Navbar>
            </div>
        )
    }

    
}

export default Navber;