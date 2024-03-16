import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './home'; 

function App() {
  return (
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
