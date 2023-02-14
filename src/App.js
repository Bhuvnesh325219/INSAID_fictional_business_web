
import './App.css';

import About from "./Components/About";
import Contact from "./Components/Contact";

  import React from "react";
 
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './Components/Home';

  
function App() {
  return (
<>
<div className='container'>
  <div className='start_page'>
    <div className='link_class'>
    <a href='/home'>Home</a>
    </div>
  
  <div className='link_class'>
  <a href='/about'>About</a>
  </div>
  <div className='link_class'>
  <a href='/contact'>Contact</a>
  </div>
</div>
</div>



    <Router>
      <Routes>
      <Route path='/home' element={<Home></Home>}> </Route>
        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
      </Routes>
    </Router>
        
          
      


    </>
  );

}

export default App;
