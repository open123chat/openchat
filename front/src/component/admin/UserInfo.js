import React from 'react';

const UserInfo = (props) => {
    const userInfo = props.userInfo
    return (
        <div style={{padding:"20px"}}>
            <div>
                id : {userInfo.username}                               
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
                    : '유저'
                }
            </div>
        </div>
    );
};

export default UserInfo;