import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to="/chat">채팅</Link>
            <br/>
            <Link to="/community">커뮤니티</Link>
            <br/>
            <Link to="/notice">공지사항</Link>
        </div>
    );
};

export default Navigation;