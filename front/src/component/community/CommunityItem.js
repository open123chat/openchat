import React from 'react';
import { Link } from 'react-router-dom';

const CommunityItem = (props) => {
    const {communityNo,communityTitle,username,communityDate,replyCount}= props.community;
    return (
        <tr>
            <td>{communityNo}</td>
            <td><Link to={"/community/"+communityNo}>
                <div style={{display:'flex'}}>
                    {communityTitle} [{replyCount}]
                </div>
                </Link>
            </td>
            <td>{username}</td>
            <td>{communityDate}</td>
        </tr>
    );
};

export default CommunityItem;