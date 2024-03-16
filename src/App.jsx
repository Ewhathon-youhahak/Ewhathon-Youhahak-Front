import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Mypage } from './mypage'; 

function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
        <Route path="/myPage" element={<Mypage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
