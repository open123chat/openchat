import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route,Routes} from "react-router";

import Main from "./component/Main";
import Login from "./component/user/Login";
import Join from "./component/user/Join";
import Chat from "./component/chat/Chat"
import Community from "./component/community/Community"
import Notice from "./component/notice/Notice"
import CommunityWrite from "./component/community/CommunityWrite";
import CommunityDetail from "./component/community/CommunityDetail";
import CommunityUpdate from "./component/community/CommunityUpdate";

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
          
      </Routes>
    </Router>
    );
}

