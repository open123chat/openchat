import React from 'react';
import { useParams } from 'react-router';
import SiteLayout from '../../layout/SiteLayout';

const CommunityDetail = (props) => {
    let {communityNo} = useParams();
    return (
        <SiteLayout>
            디테일{communityNo}
        </SiteLayout>
    );
};

export default CommunityDetail;