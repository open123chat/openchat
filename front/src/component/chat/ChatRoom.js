import React, { useEffect, useState } from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
import ChatCreateModal from './ChatCreateModal';

const ChatRoom = () => {
    //모달창
    const [createModal,setCreateModal] = useState(false);

    const showCreateModal = () =>{
        setCreateModal(!createModal);
    }

    return (
        <SiteLayout>
            {createModal && <ChatCreateModal showCreateModal={showCreateModal} />}
        <div style={{padding:"20px", width:"80%",height:"80%"}}>
            {/* 채팅 Header */}
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="">내 채팅</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
            </Card>
           
           {/* 채팅 Body */}
           <div style={{display:"flex", width:"100%",height:"100%"}}>
                {/* 채팅 목록 */}
                <div style={{width:"35%",height:"100%", border:"1px solid grey"}}>
                    <div style={{ borderRadius:"5px", display:"flex",justifyContent:"space-between"}}>
                        <div style={{padding:"5%"}}>
                            채팅 목록
                        </div>
                        <div style={{padding:"10px"}}>
                            <Button onClick={showCreateModal}>+</Button>
                            
                        </div>
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                </div>
                {/* 채팅 내역 */}
                <div style={{width:"65%",height:"100%", border:"1px solid grey", borderRadius:"5px"}}>
                    <div style={{padding:"2%", height:"80%",overflow:"scroll"}}>
                        
                    </div>

                    {/* 채팅 입력 */}
                    <div style={{height:"20%"}}>
                        <div style={{padding:"5px"}}>
                            <input style={{ width:"100%"}} id="message" name='message' placeholder='채팅을 입력해 주세요' />
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <button style={{border:"0px",borderRadius:"5px", width:"70px",height:"30px"}}
                                        onClick={()=>{}}>
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

export default ChatRoom;