import React from 'react';

const ChatRoomMessageList = () => {
    return (
        // { userNickName == localStorage.getItem('userNickName') ?
        //메시지 본인일 경우
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                
            </div>
            <div style={{border:"1px solid black",backgroundColor:"#f7e600",borderRadius:"5px",width:"40%",marginBottom:"5px"}}>
                <div style={{padding:"5px"}}>
                                <p style={{color:"white"}}>{message}</p>
                </div>
            </div>                
        </div>

    // :
    //     //상대방 메시지
    //     <div style={{width:"40%"}}>
    //                     <div>
    //                         {userNickName}
    //                     </div>
    //                     <div style={{border:"1px solid black",backgroundColor:"#737373", borderRadius:"5px"}}>
    //                         <div style={{padding:"5px"}}>
    //                             <p style={{color:"white"}}>{message}</p>
    //                         </div>
                            
    //                     </div>
    //     </div>
    // }
    );
};

export default ChatRoomMessageList;