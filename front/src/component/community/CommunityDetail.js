import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';

const CommunityDetail = () => {
    let {communityNo} = useParams();
    const [communityDetail,setCommunityDetail] = useState([]);

    useEffect (()=>{
        console.log("========상세보기=======")
        console.log("게시물 no : ",communityNo)
        const fetchfun = async() => {
            await fetch("http://localhost:8080/api/community/"+communityNo,{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            
            body:null                
        })
            .then((res)=>{
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
                    setCommunityDetail(res)
                }else{
                    alert('상세보기 불러오기가 실패했습니다.')
                }
            })
        };
        fetchfun();
    }, []) //end useEffect

    return (
        <SiteLayout>
            <Form style={{padding:'20px', border:'1px solid grey', borderRadius:'10px'}} className="mt-4" >
                <Form.Group className="mb-3 mt-3" >
                    <div className="mb-3" style={{borderBottom:'1px solid gray'}} >
                        <Link to="/community" style={{color:'black',  textDecoration:'none'}}>{"<"}커뮤니티</Link>
                        <br/>
                        <Form.Label style={{fontSize:'30px', fontWeight:'bold'}}>{communityDetail.communityTitle}</Form.Label>
                        
                        <div className="mb-3">
                            <label style={{marginRight:'20px'}}>작성자 : {communityDetail.username}</label>
                            <label>{communityDetail.communityDate}</label>
                        </div>
                    </div>
                    <div className="mb-3" style={{borderBottom:'1px solid gray'}} >
                        <div dangerouslySetInnerHTML={{__html: communityDetail.communityContent}} style={{marginTop:"50px",marginBottom:"50px"} }>
                    </div>    
                    </div>
                    <div>
                        댓글 준비중
                    </div>
                </Form.Group>
            </Form>
        </SiteLayout>
    );
};

export default CommunityDetail;