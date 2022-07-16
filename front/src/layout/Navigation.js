import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/common.scss';

const Navigation = () => {
    return (
        <div className="lnb">
            <div className="lnb-list">
                <Link to="/chat">채팅</Link>
                <Link to="/community">커뮤니티</Link>
                <Link to="/notice">공지사항</Link>
            </div>
        </div>
    );
};

export default Navigation;