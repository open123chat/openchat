import React from 'react';
import { Link } from 'react-router-dom';

const CommunityItem = (props) => {
    const {communityNo,communityTitle,username,communityDate}= props.community;
    return (
        <tr>
            <td>{communityNo}</td>
            <td><Link to={"/community/"+communityNo}>{communityTitle}</Link></td>
            <td>{username}</td>
            <td>{communityDate}</td>
        </tr>
    );
};

export default CommunityItem;