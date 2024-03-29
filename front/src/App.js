import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route,Routes} from "react-router";

import Main from "./component/main/Main";
import Login from "./component/user/Login";
import Join from "./component/user/Join";
import Chat from "./component/chat/Chat"
import Community from "./component/community/Community"
import CommunityWrite from "./component/community/CommunityWrite";
import CommunityDetail from "./component/community/CommunityDetail";
import CommunityUpdate from "./component/community/CommunityUpdate";
import Notice from "./component/notice/Notice"
import NoticeWrite from "./component/notice/NoticeWrite"
import NoticeDetail from "./component/notice/NoticeDetail";
import NoticeUpdate from "./component/notice/NoticeUpdate";
import UserManager from "./component/admin/UserManager";
import ChatRoom from "./component/chat/ChatRoom";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/community" element={<Community />} />
          <Route path="/communityWrite" element={<CommunityWrite/>}/>
          <Route path="/community/:communityNo" element={<CommunityDetail/>}/>
          <Route path="/notice" element={<Notice />} />
          <Route path="/community/update/:communityNo" element={<CommunityUpdate />} />
          <Route path="/notice/write" element={<NoticeWrite/>}/>
          <Route path="/notice/:noticeNo" element={<NoticeDetail/>}/>
          <Route path="/notice/update/:noticeNo" element={<NoticeUpdate />} />
          <Route path="/userManager"  element={<UserManager/> } />
          <Route path="/chatRoom" element={<ChatRoom/>}/>
      </Routes>
    </Router>
    );
}

