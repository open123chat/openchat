import React from 'react';
import { Button } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
const Community = () => {
    return (
        <SiteLayout>
            <div >
                <h2 style={{marginTop:'30px'}}>Community</h2>
            </div>
            <div style={{height:'80%'}}>
                목록
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button>글쓰기</Button>
            </div>
        </SiteLayout>
    );
};

export default Community;