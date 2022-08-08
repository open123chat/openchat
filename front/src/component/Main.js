import React from 'react';
import SiteLayout from '../layout/SiteLayout';
import '../scss/main.scss'
const Main = () => {
  
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
                      <th className='tableNo'>No</th>
                      <th className='tableTitle'>내용</th>
                      <th className='tableuserNickname'>작성자</th>
                      <th className='tableregDate'>날짜</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>안녕하세요 안녕하세요 안녕하세요</td>
                      <td>khu</td>
                      <td>2022-08-08</td>
                    </tr>
                  </tbody>
                  
                </table>
              </div>

              {/* 공지 */}
              <div className='width50P' style={{marginLeft:'10px'}}>
                <h3>공지사항</h3>
                <table className='table'>
                  <thead className='thead'>
                    <tr>
                      <th className='tableNo'>No</th>
                      <th className='tableTitle'>내용</th>
                      <th className='tableuserNickname'>작성자</th>
                      <th className='tableregDate'>날짜</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>안녕하세요 안녕하세요 안녕하세요</td>
                      <td>khu</td>
                      <td>2022-08-08</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
            </div>

          </div>
      </SiteLayout>        
    );
};

export default Main;