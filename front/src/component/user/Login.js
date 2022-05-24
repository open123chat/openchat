import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
const Login = () => {

    const[user,setUser] = useState();
    
    const changeValue = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    } 
    


    return (
        <SiteLayout>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>id</Form.Label>
                <Form.Control type="id" placeholder="id를 입력해주세요" name="userId" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password를 입력해주세요" name="userPassword" onChange={changeValue}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={()=>{}}>
                로그인
            </Button>
            <Button variant="primary" type="submit">
                <Link to = "/join">회원가입</Link>
            </Button>
            </Form>
        </SiteLayout>
    );
};

export default Login;