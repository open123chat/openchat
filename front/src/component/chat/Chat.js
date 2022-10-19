import React, { useEffect, useState } from 'react';
import SiteLayout from '../../layout/SiteLayout';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
import SockJS from 'sockjs-client';
import StompJs from "stompjs";
import ChatList from './ChatList';

//rsc
const Chat = () => {
    //sockJs
    const [sockJs,setSockJs] = useState();
    //messageInputState
    const [messageValue,setMessageValue] = useState({
        message:''
    });
    //messageList
    const [messageList,setMessageList] = useState([]);
///////////////////////////////////////////////////////////////////////////////////////////////

    useEffect( ()=>{
        const socket = new SockJS("http://localhost:8080/ws/chat");
        // const stomp = StompJs.over(socket);
        setSockJs(socket);
        socket.onmessage = (message) =>{
            // var responseData = JSON.stringify(message);
            console.log('받은 데이터 (onmessage): '+message);
            const responeData = JSON.parse(message.data);
            console.log('message Data:'+responeData);
            console.log('message userNickName Data:'+responeData.userNickName);
            console.log('message message Data:'+responeData.message);
            
            
            //오브젝트 추가
            // setMessageList([...messageList,responeData]);
            //배열 추가
            setMessageList(messageList=> [...messageList,responeData]);
            
    
        }
    },[]);

    
 

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
         var data = {
            userNickName : localStorage.userNickName,
            message : messageValue.message
         }
         sockJs.send(JSON.stringify(data));
         
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