import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Route,Routes} from "react-router";

import Main from "./component/Main";
import Login from "./component/user/Login";
import Join from "./component/user/Join";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

      </Routes>
    </Router>
    );
}

