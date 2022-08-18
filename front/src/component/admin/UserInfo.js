import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const UserInfo = (props) => {
    const userInfo = props.userInfo;
    const userManagerState = props.userManagerState;
    const setUserManagerState = props.setUserManagerState;

    let navigator = useNavigate();
    const [roleSelectBoxValue,setRoleSelectBoxValue]=useState(userManagerState == true ? "ROLE_ADMIN" : "ROLE_USER");
    const roleSelectBox = (e) =>{
        setRoleSelectBoxValue(e.target.value);
    }
    const roleSelect = () =>{
        console.log('선택 권한 :', roleSelectBoxValue);
        if(roleSelectBoxValue=='-권한-'){
            alert("권한을 선택해 주세요")
        }else{
            const data = {
                roles : roleSelectBoxValue
            }
            console.log(data);
            const resultData = async() =>{
                const result = await fetch("http://localhost:8080/api/admin/user/"+userInfo.userNo,{
                    method:"PUT",
                    headers:{
                        'Authorization': localStorage.getItem('Authorization'),
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    
                    body:JSON.stringify(data)            
                })
                .then((res)=>{
                    if(res.status===200){
                        return res.json();
                    }else{
                        return null;
                    }
                })
                .then((res)=>{
                    if(res != null){
                        alert("권한이 변경 되었습니다.")
                        setUserManagerState(
                            {
                                id: userInfo.username,
                                state: roleSelectBoxValue
                            }
                        );
                    }
                })
            }
            resultData();
        }
        
    }
    return (
        <div style={{padding:"20px"}}>
            <div>
                id : {userInfo.username} {userInfo.userNo}                              
            </div>
            <div>
                이름 : {userInfo.userNickName}
            </div>
            <div>
                이메일 : {userInfo.userEmail}
            </div>
            <div>
                권한 : {
                    userInfo.roles==='ROLE_ADMIN'
                    ? '관리자'
                    : '사용자'
                }
            </div>
            <div>
                가입일 : {userInfo.regDate}
            </div>
            <diV>
                <div style={{fontSize:"13px", color:"gray", marginTop:"10px"}}>
                    권한 변경
                </div>
                <div>
                    <select onChange={roleSelectBox}>
                        {/* <option>-권한-</option> */}
                        <option value="ROLE_ADMIN">관리자</option>
                        <option value="ROLE_USER">사용자</option>                        
                    </select>
                  
                    
                    <button style={{marginLeft:"5px", border:"0px", borderRadius:"5px", color:"white", backgroundColor:"gray"}} onClick={()=>{roleSelect()}}>설정</button>
                </div>
                
            </diV>
        </div>
    );
};

export default UserInfo;