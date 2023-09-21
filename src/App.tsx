import React from 'react';
import './index.css';
import Header from './components/navbar/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Random from './pages/Random/Random';
import Breeds from './pages/Breeds/Breeds';
import Categories from './pages/Categories/Categories';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-wrapper">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/random' element={<Random />} />
            <Route path='/breeds' element={<Breeds />} />
            <Route path='/categories' element={<Categories />} />
          </Routes>
        </BrowserRouter>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
