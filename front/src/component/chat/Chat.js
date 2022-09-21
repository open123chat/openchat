import React from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
//rsc
const Chat = () => {
    return (
        <SiteLayout>
        <div style={{padding:"20px", width:"80%",height:"80%"}}>
            {/* 채팅 Header */}
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="" onClick={()=>{}}>전체 채팅</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="" onClick={()=>{}}>내 채팅</Nav.Link>
                    </Nav.Item>
                    
                    </Nav>
                </Card.Header>
            </Card>
           
           {/* 채팅 Body */}
           <div style={{display:"flex", width:"100%",height:"100%"}}>
                {/* 채팅 목록 */}
                <div style={{width:"35%",height:"100%", border:"1px solid grey", borderRadius:"5px"}}>
                    <div style={{padding:"5%"}}>
                        채팅 목록
                    </div>
                </div>
                {/* 채팅 내역 */}
                <div style={{width:"65%",height:"100%", border:"1px solid grey", borderRadius:"5px"}}>
                    <div style={{padding:"2%", height:"80%"}}>
                        채팅 내역
                    </div>

                    {/* 채팅 입력 */}
                    <div style={{height:"20%"}}>
                        <div style={{padding:"5px"}}>
                            <input style={{ width:"100%"}}  placeholder='채팅을 입력해 주세요'/>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <button>
                                    전송
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
           {/* 채팅 Body End */}     
           </div> 
        </div>
        </SiteLayout>
    );
};

export default Chat;