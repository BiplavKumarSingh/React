import './App.css';
import './assets/css/utils.css';
import './assets/css/mobile.css';
import { Fragment } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
       <Routes>

     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/Contact" element={<Contact/>}/>
     <Route exact path="/about" element={<About/>}/>

     </Routes>  
     </BrowserRouter>
  )
}


export default App;
