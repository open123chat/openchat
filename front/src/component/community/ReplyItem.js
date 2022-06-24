import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ReplyItem = (props) => {
    const {replyNo,communityNo,username,replyContent,position,depth,regDate}=props.reply;
    const [reReplyState,setReReplyState] = useState(false);
    let navigator = useNavigate();
    //댓글 상태
    const [replyInfo,setReplyInfo] = useState([]);
    const changeValue = (e) =>{
            setReplyInfo({
                ...replyInfo,
                [e.target.name]:e.target.value
            });
    } 
    const reReplyOn = () =>{
        if(reReplyState === false){
            setReReplyState(true)
        }else{
            setReReplyState(false)
        }
    }

    const reReplyWrite = () =>{
        console.log(communityNo)
        const data = {
            userNo:localStorage.getItem('userNo'),
            replyContent: replyInfo.replyContent,
            position:position,
            depth:depth
        }
        console.log('대댓글 data : ', data);
        const fetchfun = async()=>{
            await fetch("http://localhost:8080/api/reply/"+communityNo,{
                method:"POST",
                headers:{
                    'Authorization':localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then((res)=>{
                if(res.status===201){
                    return res;
                }else{
                    return null;
                }
            })
            .then((res)=>{
                if(res != null){
                        setReplyInfo([]);
                        navigator("/community/"+communityNo);
                }else{
                    alert("댓글 작성 실패했습니다.")
                }
            })
        }
        fetchfun();
    }

    const replyDelete = () =>{
        console.log('삭제 클릭 : ',replyNo)
        const fetchfun = async() =>{
            await fetch("http://localhost:8080/api/reply/"+replyNo,{
                method:"DELETE",
                headers:{
                    'Authorization':localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:null
            })
            .then((res)=>{
                if(res.status===204){
                    return res;
                }else{
                    return null;
                }
            })
            .then((res)=>{
                if(res!=null){
                    navigator("/community/"+communityNo)
                }else{
                    return null;
                }
            })
        }
        fetchfun();
    }
    return (
        <div>
        {
            depth == 2 
            ?
            <div style={{marginLeft:'50px', marginTop:'10px'}}>
            <div>{username}</div>
            <div>{replyContent}</div>
 
            <div style={{display:'flex', fontSize:'12px', color:'grey'}}>
            <div>{regDate}</div>
            <div style={{ marginLeft:'20px'}} onClick={()=>{reReplyOn()}}> 답글쓰기 </div>
            {
             username == localStorage.getItem('username')
             ?
             <div style={{marginTop:'-3px'}}>
                 <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}}>수정</button>
                 <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}} type='button' onClick={()=>{replyDelete()}}>삭제</button>
             </div>
             :
              null
            }
            </div>
 
            {
             reReplyState === false
             ?
             <></>
             :
             <div style={{marginTop:'10px', marginLeft:'10px'}}>
             <div>
                 {localStorage.getItem('username')}
             </div>
             <input type="text" name="replyContent" onChange={changeValue}/>
                                 <button style={{marginLeft:'10px'}} type="button" onClick={()=>{reReplyWrite()}}>작성</button>
 
              </div>
            }
 
            <br/>
         </div>
            :
            <div style={{marginLeft:'20px', marginTop:'10px'}}>
            <div>{username}</div>
            <div>{replyContent}</div>
 
            <div style={{display:'flex', fontSize:'12px', color:'grey'}}>
            <div>{regDate}</div>
            <div style={{ marginLeft:'20px'}} onClick={()=>{reReplyOn()}}> 답글쓰기 </div>
            {
             username == localStorage.getItem('username')
             ?
             <div style={{marginTop:'-3px'}}>
                 <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}}>수정</button>
                 <button style={{ marginLeft:'20px', border:'0px', backgroundColor:'white',color:'grey'}}type='button' onClick={()=>{replyDelete()}}>삭제</button>
             </div>
             :
              null
            }
            </div>
 
            {
             reReplyState === false
             ?
             <></>
             :
             <div style={{marginTop:'10px', marginLeft:'10px'}}>
             <div>
                 {localStorage.getItem('username')}
             </div>
             <input type="text" name="replyContent" onChange={changeValue}/>
                                 <button style={{marginLeft:'10px'}} type="button" onClick={()=>{reReplyWrite()}}>작성</button>
 
              </div>
            }
 
            <br/>
         </div>
        }
        </div>
    );
};

export default ReplyItem;       