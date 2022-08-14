import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
import AdminList from './AdminList';
import UserInfo from './UserInfo';
import UserList from './UserList';

const UserManager = () => {
    const [adminList,setAdminList] = useState([]);
    const [userList,setUserList]=useState([]);
    const [userInfo,setUserInfo]=useState([]);

    useEffect( ()=>{
        const data = async() =>{
            const result = await fetch("http://localhost:8080/api/admin/userList",{
                method:"GET",
                headers:{
                    'Authorization': localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                
                body:null                
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setAdminList(res.admin);
                setUserList(res.user);
            })
        };
        if(localStorage.getItem('role')=='ROLE_ADMIN'){
            console.log('관리자 접속 - 유저 관리')
            data();
        }else{
            alert("관리자 로그인을 진행해 주세요");
        }       
    },[]); // end useEffect
    return (
        <SiteLayout>
            <div style={{padding:"10px", height:"100%"}}>
                <h3>유저 관리</h3>
                {/* 유저 관리 DOM */}
                <div style={{display:"flex", width:"100%", height:"400px"}}>
                    {/* 유저 목록 DOM */}
                    <div style={{border:"1px solid black", width:"50%", borderRadius:"20px", padding:"10px"}}>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                            <h4>유저 목록</h4>
                        </div>
                        <div style={{ marginTop:"20px", border:"1px solid black", padding:"10px", marginLeft:"30px",marginRight:"30px", height:"300px", overflow:"scroll"}}>
                            <div style={{textAlign:"center",color:"#F05650"}}>-관리자-</div>
                            {
                                adminList.map(admin => <AdminList key={admin.userNo} admin={admin} setUserInfo={setUserInfo}/>)
                            }
                            
                            <div style={{textAlign:"center",color:"#4070FF"}}>-유저-</div>
                            {
                                userList.map(user => <UserList key={user.userNo} user={user} setUserInfo={setUserInfo}/>)
                            }
                        </div>
                    </div>
                    {/* 유저 상세보기 DOM */}
                    <div style={{border:"1px solid black", width:"50%", borderRadius:"20px", padding:"10px",marginLeft:"10px"}}>
                        <div style={{textAlign:"center", marginTop:"20px"}}>
                            <h4>유저 정보</h4>
                        </div>
                        <UserInfo userInfo={userInfo}/>

                    </div>
                </div>
            </div>
        </SiteLayout>
    );
};

export default UserManager;