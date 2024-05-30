
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
        
          <Route exact path="/" element={<News  key="General"  pageSize={9} country="in" category=" " />} />
          <Route exact path="/Business" element={<News key="Bussiness" pageSize={9} country="in" category="Business" />} />
          <Route exact path="/Entertainment" element={<News  key="Entertainment" pageSize={9} country="in" category="Entertainment" /> }/> 
          <Route exact path="/Science" element={<News key="Science"  pageSize={9} country="in" category="Science" />} />
          <Route exact path="/Sports" element={<News  key="Sports" pageSize={9} country="in" category="Sports" />} />
          <Route exact path="/Health" element={<News key="Health"  pageSize={9} country="in" category="Health" />} />
          <Route exact path="/Travel" element={<News key="Travel"  pageSize={9} country="in" category="Travel" />} 
          />
          <Route exact path="/Politics" element={<News key="Politics"  pageSize={9} country="in" category="Politics" />} 
          />
          
        </Routes>
      </div>
      </Router>
    )
  }

  export default App
