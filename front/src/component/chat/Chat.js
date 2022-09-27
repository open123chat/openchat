import React, { useEffect, useState } from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
import SockJS from 'sockjs-client';
import StompJs from "stompjs";
import ChatList from './ChatList';

//rsc
const Chat = () => {
    //messageInputState
    const [messageValue,setMessageValue] = useState({
        message:''
    });
    //messageList
    const [messageList,setMessageList] = useState([]);

    const socket = new SockJS("http://localhost:8080/ws/chat");
    // const stomp = StompJs.over(socket);

    socket.onmessage = (message) =>{
        
        console.log('onmessage :'+message.data);
        setMessageList([...messageList, message]);
    }

    //메시지 전송
    const messageInputValue = (e) =>{
        setMessageValue({
            ...messageValue,
            [e.target.name] : e.target.value
        });
    }
    const sendMessage = () =>{
         console.log('Send Message : '+messageValue);
         console.log('Send Message : '+messageValue.message);
         socket.send(localStorage.username+":"+messageValue.message);
         
         setMessageValue({message:''});
    }

    //DOM
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
                        {messageList.map(message=><ChatList message={message} />)}
                    </div>

                    {/* 채팅 입력 */}
                    <div style={{height:"20%"}}>
                        <div style={{padding:"5px"}}>
                            <input style={{ width:"100%"}} id="message" name='message' placeholder='채팅을 입력해 주세요' onChange={messageInputValue}/>
                            <div style={{display:"flex", justifyContent:"flex-end"}}>
                                <button style={{border:"0px",borderRadius:"5px", width:"70px",height:"30px"}}
                                        onClick={()=>{sendMessage()}}>
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