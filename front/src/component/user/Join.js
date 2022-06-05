import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    let navigate = useNavigate();
    const[userObj,setUserObj] = useState();
    
    const changeValue = (e) =>{
        setUserObj({
            ...userObj,
            [e.target.name]:e.target.value
        });
    } 
    
    const userJoin = () => {
        console.log('유저 회원가입 정보 : ',userObj);
        
        const fetchfun = async() => {
            const response = await fetch("http://localhost:8080/chat/api/user/join",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify(userObj)
            }).then((res) => {
                console.log(1,res);
                if(res.status===201){
                    return res.json();
                }else{
                    return null;
                }
            })
            .then((res)=>{
                console.log(2,res);
                if(res !== null){
                    navigate('/login');
                }else{
                    alert("회원가입 실패하였습니다.")
                }
            });
        }
        fetchfun();
    }


    return (
        <SiteLayout>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>id</Form.Label>
                <Form.Control type="id" placeholder="id를 입력해주세요" name="userId" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password를 입력해주세요" name="userPassword" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="name" placeholder="이름을 입력해주세요" name="userName" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email을 입력해주세요" name="userEmail" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" onClick={ ()=>{userJoin()}}>
                회원가입
            </Button>
            </Form>
        </SiteLayout>
    );
};

export default Login;