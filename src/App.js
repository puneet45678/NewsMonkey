import './App.css';
import React, {useState } from 'react'
import Navabar from './components/Navabar';
import News  from './components/News' ;
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const [progress,setProgress] = useState(0)  
  
    return (
      <>
      <Router>
      <Navabar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="general" pageSize={5} country="in" category="general"/>}>  </Route>
        <Route exact path="/About" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="About" pageSize={5} country="in" category="About"/>}>  </Route>
        <Route exact path="/Business" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Business" pageSize={5} country="in" category="Business"/>}>  </Route>
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Entertainment" pageSize={5} country="in" category="Entertainment"/>}>  </Route>
        <Route exact path="/General" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="General" pageSize={5} country="in" category="General"/>}>  </Route>
        <Route exact path="/Health" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Health" pageSize={5} country="in" category="Health"/>}>  </Route>
        <Route exact path="/Science" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Science" pageSize={5} country="in" category="Science"/>}>  </Route>
        <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Sports" pageSize={5} country="in" category="Sports"/>}>  </Route>
        <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey="8736697522154fc885927cb152ab78a5 " key="Technology" pageSize={5} country="in" category="Technology"/>}>  </Route>        
      </Routes>
      </Router>
      </>
    )
  }

  export default App

        
