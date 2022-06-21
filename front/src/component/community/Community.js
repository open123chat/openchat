import React, { useEffect, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
import CommunityItem from './CommunityItem';
const Community = () => {
    const [communityList,setCommunityList] =useState([]);
    useEffect(()=>{
        console.log("커뮤니티 dom 실행됨")
        // fetch("http://localhost:8080/api/community/list")
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log('list :',res)
        // });
        const data = async () =>{
                const result = await fetch("http://localhost:8080/api/community/list",{
                    method:"GET",
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    
                    body:null                
                })//end fetch
                .then(res=>res.json())
                .then(res=>{
                    console.log('list 값',res);
                    setCommunityList(res);
                    
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
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link to="/community">전체 게시물</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/mycommunity">내 게시물</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
            </Card>
            <div style={{height:'80%', width:'100%'}}>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr>
                        <th style={{width:'5%'}}>No</th>
                        <th style={{width:'75%'}}>제목</th>
                        <th style={{width:'10%'}}>작성자</th>
                        <th style={{width:'10%'}}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {communityList.map(community=><CommunityItem key={community.communityNo} community={community}/>)}
                    </tbody>
                </table>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button>
                    {
                    localStorage.getItem('Authorization') ==null
                    ?
                    <Link to ="/login" style={{color:'white', textDecoration:'none'}}>
                    글쓰기</Link>
                    :
                    <Link to ="/communityWrite" style={{color:'white', textDecoration:'none'}}>
                    글쓰기</Link>
                    }                   
                    </Button>
            </div>
        </SiteLayout>
    );
};

export default Community;