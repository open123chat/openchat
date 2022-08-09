import React, { useEffect, useState } from 'react';
import SiteLayout from '../../layout/SiteLayout';
import '../../scss/main.scss'
import CommunityList from './CommunityList';
import NoticeList from './NoticeList';
const Main = () => {
  
  const [mainList,setMainList] = useState([]);
  const [communityList,setCommunityList] = useState([]);
  const [noticeList,setNoticeList] = useState([]);


  useEffect( ()=>{
    const data = async() =>{
      const response = await fetch("http://localhost:3000/api/main",{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:null 
    }) //end fetch
      .then(res=>res.json())
      .then(res=>{
        console.log('list 값',res);
        console.log('communitylist 값',res.community);
        console.log('noticelist 값',res.notice);
        setCommunityList(res.community);
        setNoticeList(res.notice);
        
    });
    }
    data();
   },[]);




    return (
      <SiteLayout>
          <div style={{padding:'20px'}}>
            {/* 상단 */}
            <div>
              <h2>메인</h2>
            </div>
            <br/>
            {/* 커뮤니티,공지 */}
            <div className='CommunityAndNoticeDom'>
              {/* 커뮤니티 */}
              <div className='width50P' style={{marginRight:'10px'}}>
                <h3>커뮤니티</h3>
                <table className='table'>
                  <thead className='thead'>
                    <tr>   
                      <th className='tableTitle'>내용</th>
                      <th className='tableuserNickname'>작성자</th>
                      <th className='tableregDate'>날짜</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      communityList.map(community=><CommunityList key={community.no} community={community}/>)
                    }
                  </tbody>
                  
                </table>
              </div>

              {/* 공지 */}
              <div className='width50P' style={{marginLeft:'10px'}}>
                <h3>공지사항</h3>
                <table className='table'>
                  <thead className='thead'>
                    <tr>
                      
                      <th className='tableTitle'>내용</th>
                      <th className='tableuserNickname'>작성자</th>
                      <th className='tableregDate'>날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      noticeList.map(notice=><NoticeList key={notice.no} notice={notice}/>)
                  }
                  </tbody>
                </table>
              </div>
            
            </div>

          </div>
      </SiteLayout>        
    );
};

export default Main;