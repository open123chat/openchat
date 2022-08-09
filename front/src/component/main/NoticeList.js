import React from 'react';
import { Link } from 'react-router-dom';

const NoticeList = (props) => {
    const {no, title, userNickname, regDate, replyCount} = props.notice;
    return (
        <tr>  
            <td><Link to={"/notice/"+no} style={{textDecorationLine:'none', color:'#F05650'}}>
                <div style={{display:'flex'}}>
                    {title}
                </div>
                </Link>
            </td>
            <td>{userNickname}</td>
            <td>{regDate}</td>
      </tr>
    );
};

export default NoticeList;