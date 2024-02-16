import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Index';
import Navbar from './Components/Navbar/Index';
import NotFound from './Pages/NotFound/Index';
import Footer from './Components/Footer/Index';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
