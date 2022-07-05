import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
import { useNavigate } from 'react-router-dom';
import jwt_encode from 'jwt-decode';

const Login = () => {
    let navigate = useNavigate();
    const[user,setUser] = useState();
    
    const changeValue = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        });
    } 
    
    const userLogin = () =>{
        console.log('로그인할 사용자 : ',user);
        const fetchfun = async() => {
            const response = await fetch("http://localhost:8080/login",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify(user)
            }).then((res) => {
                console.log(1,res.headers);
                console.log("token ", res.headers.get("Authorization"))

                if(res.status===200){
                    // res.headers("Authorization")
                    localStorage.setItem("Authorization", res.headers.get("Authorization"));
                    let jwttoken = localStorage.getItem('Authorization')
                    if (jwttoken !== undefined && jwttoken !== null) {
                        var bearerSplit = jwttoken.replace("Bearer ","");
                        // let base64Payload = bearerSplit.split('1')[1];
                        // let payLoad = Buffer.from(base64Payload,'base64'); // Buffer 못찾음 해결
                        // let result = JSON.parse(payLoad.toString())
                        var decoded = jwt_encode(bearerSplit);
                        console.log("decode data : ",decoded);
                        console.log("decoded username: ",decoded.username);
                        console.log("decoded userid: ",decoded.id);
                        console.log("decoded userRole: ",decoded.role);
                        localStorage.setItem("username", decoded.username);
                        localStorage.setItem("userNo",decoded.id);
                        localStorage.setItem("role",decoded.role);
                     }

                    return res;
                } else{
                    return null;
                }
            })
            .then((res)=>{
                console.log(2,res);
                if(res !== null){
                    // window.location.replace("/")
                    navigate('/');
                }else{
                    alert("로그인에 실패하였습니다.")
                }
            });
        }
        fetchfun();
    }


    return (
        <SiteLayout>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>id</Form.Label>
                <Form.Control type="id" placeholder="id를 입력해주세요" name="username" onChange={changeValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password를 입력해주세요" name="password" onChange={changeValue}/>
            </Form.Group>

            <Button variant="primary"  onClick={()=>{userLogin()}} style={{marginRight:'10px'}}>
                로그인
            </Button>
            <Button variant="primary"  >
                <Link to = "/join" style={{color:"white", textDecoration:'none'}}>회원가입</Link>
            </Button>
            </Form>
        </SiteLayout>
    );
};

export default Login;