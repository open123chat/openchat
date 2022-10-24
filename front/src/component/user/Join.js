import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
import { useNavigate } from 'react-router-dom';

import '../../scss/user.scss';

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
        
        const fetchfun = async( ) => {
            const response = await fetch("htt p://localhost:8080/api/user/join",{
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
            <div className='user-wrap join-wrap'>
                <Form>
                    <h2>JOIN</h2>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>id</Form.Label>
                        <Form.Control type="id" placeholder="id를 입력해주세요" name="username" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password를 입력해주세요" name="password" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="name" placeholder="이름을 입력해주세요" name="userNickName" onChange={changeValue}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email을 입력해주세요" name="userEmail" onChange={changeValue}/>
                    </Form.Group>

                    <Button className='join-btn' variant="primary" onClick={ ()=>{userJoin()}}>
                        회원가입
                    </Button>
                </Form>
            </div>
        </SiteLayout>
    );
};

export default Login;