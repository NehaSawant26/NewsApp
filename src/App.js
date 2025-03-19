
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=>  {
    return ( 
      <Router>
      <div>  
        <Sidebar />
         <Navbar/>
       
        <Routes>    
          <Route exact path="/" element={<News  key="General" category=" " />} />
          <Route exact path="/Bussiness" element={<News key="Bussiness" category="Bussiness" />} />
          <Route exact path="/Entertainment" element={<News  key="Entertainment" category="Entertainment" /> }/> 
          <Route exact path="/Science" element={<News key="Science" category="Science" />} />
          <Route exact path="/Sports" element={<News  key="Sports" category="Sports" />} />
          <Route exact path="/Health" element={<News key="Health" category="Health" />} />
          <Route exact path="/Travel" element={<News key="Travel" category="Travel" />} />
        </Routes>
      </div>
      </Router>
    )
  }

  export default App
