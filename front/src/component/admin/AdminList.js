import React from 'react';
import { Button } from 'react-bootstrap';

const AdminList = (props) => {
    const {userNo, userNickName,userEmail} = props.admin;
    const setUserInfo = props.setUserInfo;

    const userInfobt = () =>{
        console.log(userNo);
        const data = async() =>{
            const result = await fetch("http://localhost:8080/api/user/"+userNo,{
                method:"GET",
                headers:{
                    'Authorization': localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                
                body:null                
            })
            // .then((res)=>{
            //     if(res.status===200){
            //         res = res.json();
            //         return res;
            //     }
            // })
            .then((res)=>{
                if(res.status===200){
                    return res.json();
                }else{
                    return null;
                }
            })
            .then((res)=>{
                if(res != null){
                    console.log("======유저 정보======", res);
                    setUserInfo(res);
                }
            })
        }
        data();
    }
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", marginLeft:"30px",marginRight:"30px",borderBottom:"1px solid gray",padding:"10px"}}>
                <div style={{display:"flex",fontSize:"18px"}}>
                    <div>{userNickName}</div>
                    <div style={{marginLeft:"10px"}}>({userEmail})</div>
                </div>
                <div>
                    <Button onClick={()=>{userInfobt()}}>선택</Button>
                </div>
            </div>
            <br/>
        </div>                    
    );
};

export default AdminList;