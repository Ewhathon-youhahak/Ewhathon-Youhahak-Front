import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './login'; 
import { SignUp } from './login/signUp';

function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
