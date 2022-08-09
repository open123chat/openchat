import React from 'react';
import { Link } from 'react-router-dom';

const NoticeItem = (props) => {
    const {noticeNo, noticeTitle, regDate, userNickname} = props.notice;
    return (
        <tr>
            <td>{noticeNo}</td>
            <td><Link to={"/notice/"+noticeNo} style={{textDecorationLine:'none', color:'#F05650'}}>
                <div style={{display:'flex'}}>
                    {noticeTitle}
                </div>
                </Link>
            </td>
            <td>{userNickname}</td>
            <td>{regDate}</td>
        </tr>
    );
};

export default NoticeItem;