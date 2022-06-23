import React from 'react';

const ReplyItem = (props) => {
    const {replyNo,username,replyContent,position,depth,regDate}=props.reply;
    return (
        <div style={{marginLeft:'20px', marginTop:'10px'}}>
           <div>{username}</div>
           <div>{replyContent}</div>

           <div style={{display:'flex', fontSize:'12px', color:'grey'}}>
           <div>{regDate}</div>
           <div style={{ marginLeft:'20px'}}> 답글쓰기 </div>
           {
            username == localStorage.getItem('username')
            ?
            <div style={{marginTop:'-3px'}}>
                <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}}>수정</button>
                <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}}>삭제</button>
            </div>
            :
             null
           }
           </div>
           <br/>
        </div>
    );
};

export default ReplyItem;       