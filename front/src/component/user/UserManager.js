import React from 'react';
import { Button } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';

const UserManager = () => {
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
                        <div style={{ marginTop:"30px", border:"1px solid black", padding:"10px", marginLeft:"30px",marginRight:"30px"}}>
                            <div style={{display:"flex", justifyContent:"space-between", marginLeft:"50px",marginRight:"50px",borderBottom:"1px solid gray",padding:"10px"}}>
                                <div style={{display:"flex",fontSize:"20px"}}>
                                    <div>user </div>
                                    <div style={{marginLeft:"10px"}}>(user@naver.com)</div>
                                </div>
                                <div>
                                    <Button>선택</Button>
                                </div>
                            </div>
                            <br/>
                            <div style={{display:"flex", justifyContent:"space-between", marginLeft:"150px",marginRight:"150px"}}>
                                <div style={{fontSize:"20px"}}>user</div>
                                <Button>선택</Button>
                            </div>
                        </div>
                    </div>
                    {/* 유저 상세보기 DOM */}
                    <div style={{border:"1px solid black", width:"50%", marginLeft:"10px"}}>
                        유저 상세보기
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
};

export default UserManager;