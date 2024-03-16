import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Mypage } from './mypage'; 
import { Login } from './login'; 
import { SignUp } from './login/signUp';
import { Home } from './home'; 


function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/myPage" element={<Mypage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
