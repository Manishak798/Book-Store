import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Createbooks from './pages/Createbooks';
import Showbooks from './pages/Showbooks';
import Editbook from './pages/Editbook';
import Deletebook from './pages/Deletebook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/create" element={<Createbooks />}></Route>
      <Route path="/books/details/:id" element={<Showbooks />}></Route>
      <Route path="/books/edit/:id" element={<Editbook />}></Route>
      <Route path="/books/delete/:id" element={<Deletebook />}></Route>
    </Routes>
  )
}
//use rafce short cut
export default App