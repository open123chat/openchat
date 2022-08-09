import React from 'react';
import { Link } from 'react-router-dom';

const CommunityList = (prpos) => {
    const {no, title, userNickname, regDate, replyCount} = prpos.community;
    return (
        <tr>  
            <td><Link to={"/community/"+no} style={{textDecorationLine:'none', color:'black'}}>
                <div style={{display:'flex'}}>
                    {title} [{replyCount}]
                </div>
                </Link>
            </td>
            <td>{userNickname}</td>
            <td>{regDate}</td>
      </tr>
    );
};

export default CommunityList;