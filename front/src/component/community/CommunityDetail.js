import React from 'react';
import { useParams } from 'react-router';

const CommunityDetail = (props) => {
    let {communityNo} = useParams();
    return (
        <div>
            디테일{communityNo}
        </div>
    );
};

export default CommunityDetail;