import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './outlet/Layout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
