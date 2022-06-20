import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
const Community = () => {
    const [communityList,setCommunityList] =useState();
    useEffect(()=>{
        console.log("커뮤니티 dom 실행됨")
        const data = async () =>{
                const result = await fetch("http://localhost:8080/api/community/list",{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    body:null                
                })//end fetch
                .then(res=>res.json)
                .then(res=>{
                    console.log('result 값',res);
                    setCommunityList(res.data);
                    
                })
        };
        data();
        console.log('fetch 실행됨?',communityList);
    },[]); //end useEffect

    return (
        <SiteLayout>
            <div >
                <h2 style={{marginTop:'30px'}}>Community</h2>
            </div>
            <div style={{height:'80%', width:'100%'}}>
                <table style={{width:'100%'}}>
                    <thead>
                        <td style={{width:'5%'}}>No</td>
                        <td style={{width:'75%'}}>제목</td>
                        <td style={{width:'10%'}}>작성자</td>
                        <td style={{width:'10%'}}>작성 시간</td>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>제목 테스트</td>
                        <td>khu</td>
                        <td>2022</td>
                        <tr></tr>
                        <td>2</td>
                    </tbody>
                </table>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button>글쓰기</Button>
            </div>
        </SiteLayout>
    );
};

export default Community;