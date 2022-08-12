import React from 'react';
import SiteLayout from '../../layout/SiteLayout';

const UserManager = () => {
    return (
        <SiteLayout>
            <div style={{padding:"10px", height:"100%"}}>
                <h3>유저 관리</h3>
                {/* 유저 관리 DOM */}
                <div style={{display:"flex", width:"100%"}}>
                    {/* 유저 목록 DOM */}
                    <div style={{border:"1px solid black", width:"50%", borderRadius:"10px"}}>
                        ㅇㅇ
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