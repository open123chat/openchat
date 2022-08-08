import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';

const NoticeDetail = () => {    
    let {noticeNo} = useParams();
    const [noticeDetail, setNoticeDetail] = useState([]);

    useEffect( ()=>{
        console.log("공지사항 Detail dom 실행 됨??" + noticeNo)
        const data = async() =>{
            const result = await fetch("http://localhost:3000/api/notice/"+noticeNo,{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:null 
            }) //end fetch
            .then( (res) => {
                console.log('상세보기 res :',res)
                if(res.status===200){
                    return res.json();
                }else{
                    return null;
                }
            })
            .then((res)=>{
                if(res!==null){
                    console.log('상세보기 fetch 성공',res)
                    setNoticeDetail(res)
                }else{
                    alert('상세보기 불러오기가 실패했습니다.')
                }
            });
        }
        data();
    },[]); //end useEffect


    return (
        <SiteLayout>
        <Form style={{padding:'20px', border:'1px solid grey', borderRadius:'10px'}} className="mt-4" >
            
            <Form.Group className="mb-3 mt-3" >
                <div className="mb-3" style={{borderBottom:'1px solid gray'}} >
                    <Link to="/notice" style={{color:'black',  textDecoration:'none'}}>{"<"}공지사항</Link>
                    <br/>
                    <Form.Label style={{fontSize:'30px', fontWeight:'bold'}}>{noticeDetail.noticeTitle}</Form.Label>
                    
                    <div className="mb-3">
                        <label style={{marginRight:'20px'}}>작성자 : {noticeDetail.userNickname}</label>
                        <label>{noticeDetail.regDate}</label>
                    </div>
                </div>
                <div className="mb-3" style={{borderBottom:'1px solid gray'}} >
                    <div dangerouslySetInnerHTML={{__html: noticeDetail.noticeContent}} style={{marginTop:"50px",marginBottom:"50px"} }>
                </div>    
                </div>
            </Form.Group>
            
        </Form>
        {/* {localStorage.getItem('userNo')==communityDetail.userNo
        ?
        <div className='mt-3'>
            <Link to ={"/community/update/"+communityNo}><button style={{width:"50px", height:"40px", border:"0px", borderRadius:"5px", fontSize:"15px"}}>수정</button></Link>
            <button style={{marginLeft:"10px",width:"50px", height:"40px", border:"0px", borderRadius:"5px", fontSize:"15px"}} onClick={()=>communityDelete()}>삭제</button>
        </div>
        :
        <></>
        } */}

    </SiteLayout>
    );
};

export default NoticeDetail;