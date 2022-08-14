import React from 'react';
import { Button } from 'react-bootstrap';

const AdminList = (props) => {
    const {userNo, userNickName,userEmail} = props.admin;
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between", marginLeft:"30px",marginRight:"30px",borderBottom:"1px solid gray",padding:"10px"}}>
                <div style={{display:"flex",fontSize:"18px"}}>
                    <div>{userNickName}</div>
                    <div style={{marginLeft:"10px"}}>({userEmail})</div>
                </div>
                <div>
                    <Button>선택</Button>
                </div>
            </div>
            <br/>
        </div>                    
    );
};

export default AdminList;