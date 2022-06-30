import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
import CommunityItem from './CommunityItem';
const Community = () => {
    const [communityList,setCommunityList] =useState([]);
    const [communityAllandMy,setCommunityAllandMy] = useState(true);
    const [communityMyList,setCommunityMyList] = useState([]);
    const [communitySearch,setCommunitySearch] = useState([]);
    useEffect( ()=>{
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
                    setCommunityAllandMy(true);
                })
        };
        data();
        console.log('fetch 실행됨?',communityList);

    },[]); //end useEffect

    const AllCommunity = () =>{
        setCommunityAllandMy(true);
    }
    const MyCommunity = () =>{
        const MyData = async () =>{
            await fetch("http://localhost:8080/api/community/mylist/"+localStorage.getItem('username'),{
                method:"GET",
                headers:{
                    'Authorization':localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                
                body:null                
            })
            .then(res=>res.json())
            .then(res=>{
                console.log('list 값',res);
                setCommunityMyList(res);
                setCommunityAllandMy(false);
            })
        }
        MyData();
        
    }

    // //검색
    // const changeValue = (e) => {
    //     // editorState에 값 설정
    //     console.log('내용 :',e);
    //     setCommunitySearch({
    //       ...communitySearch,
    //       [e.target.name]:e.target.value
    //     });
    //   };
    //   //
    // const communitySearchOnClick = () =>{ 
    //     console.log('search 내용 : ',communitySearch.communityTitle);
    //     const searchfun = async() =>{
    //         await fetch("http://localhost:8080/api/community/"+communitySearch.communityTitle,{
    //             method:"GET",
    //             headers:{
    //                 'Content-Type':'application/json',
    //                 'Accept':'application/json'
    //             },
                
    //             body:null                
    //         })
    //         .then(res=>res.json())
    //         .then(res=>{
    //             console.log('list 값',res);
    //             setCommunityList(res);
    //             setCommunityAllandMy(true);
    //         })
    //     }
        
    // }
    
    //검색
    const [keyword, setKeyword] = useState('');

    return (
        <SiteLayout>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px', marginBottom:'10px'}}>
                <h2 style={{}}>Community</h2>

                <Form className="d-flex">
                    <input
                        id="search"
                        name="search"
                        placeholder="게시물 검색"
                        value={keyword}
                        onChange={e => {
                            let data = e.target.value;
                            setKeyword(data);
                        }}
                    />
                    {/* <Button variant="outline-success" onClick={()=>{communitySearchOnClick()}}>Search</Button> */}
                </Form>
            </div>
            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="" onClick={()=>{AllCommunity()}}>전체 게시물</Nav.Link>
                    </Nav.Item>
                    {
                    localStorage.getItem('Authorization') != undefined && localStorage.getItem('Authorization') != null 
                    ?
                    <Nav.Item>
                        <Nav.Link href="" onClick={()=>{MyCommunity()}}>내 게시물</Nav.Link>
                    </Nav.Item>
                    :
                    <></>
                    }
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
                        {
                            communityAllandMy === true
                            ?
                            communityList.filter(community=>community.communityTitle.indexOf(keyword) != -1).map(community=><CommunityItem key={community.communityNo} community={community}/>)
                            :
                            communityMyList.filter(community=>community.communityTitle.indexOf(keyword) != -1).map(community=><CommunityItem key={community.communityNo} community={community}/>)
                        }
                    </tbody>
                </table>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end', marginTop:'-30px'}}>
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