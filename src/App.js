import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Details from './components/Details';




function App() {



  return (
    <div className="App">



      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='projects' element={<Projects />} />

          {/* <Route path='/details/:id' element={<Details />} /> */}
          <Route path='projects/:id' element={<Details />} />

          <Route path='contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>




    </div>

  );
};

export default App;
