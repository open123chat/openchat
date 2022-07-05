import React, { useEffect, useState } from 'react';
import { Button, Card, Form, FormControl, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SiteLayout from '../../layout/SiteLayout';
const Notice = () => {

    //검색
    const [keyword, setKeyword] = useState('');
    
    
    return (
        <SiteLayout>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px', marginBottom:'10px'}}>
                <h2 style={{}}>공지사항</h2>

                <Form className="d-flex">
                    <input
                        id="search"
                        name="search"
                        placeholder="공지사항 검색"
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
                        <Nav.Link href="" >전체 게시물</Nav.Link>
                    </Nav.Item>
                    {
                    localStorage.getItem('Authorization') != undefined && localStorage.getItem('Authorization') != null 
                    ?
                    <Nav.Item>
                        <Nav.Link href=""></Nav.Link>
                    </Nav.Item>
                    :
                    <></>
                    }
                    </Nav>
                </Card.Header>
            </Card>
            <div style={{height:'80%', width:'100%', marginTop:'20px'}}>
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
                    <tr>
                        <td>1</td>
                        <td><Link to={"/community/"}>
                            <div style={{display:'flex'}}>
                                title
                            </div>
                        </Link>
                        </td>
                        <td>Admin</td>
                        <td>2022</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end', marginTop:'-30px'}}>

                    {
                    localStorage.getItem('Authorization') != null && localStorage.getItem('role') == 'ROLE_ADMIN'
                    ?
                    <Button>
                        <Link to ="/notice/write" style={{color:'white', textDecoration:'none'}}>
                        글쓰기</Link>                
                    </Button>
                    :
                    <></>
                    }
            </div>
        </SiteLayout>
    );
};

export default Notice;     