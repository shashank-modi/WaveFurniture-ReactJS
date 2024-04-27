import React from "react";
import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StorePage from './pages/Store.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}
