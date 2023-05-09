import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import Alert from './components/Alert'
import About from './components/About'
import { useState } from 'react';
import PropTypes from 'prop-types'
// import ReactDOM from "react-dom/client";
// import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  // Link
// } from "react-router-dom";
// 


function App() {
  
  const [thestyle,setThestyle] = useState({
  color:'darkgrey',
  height:'100vh',
  margin:'0px'
  })
  const[mainstyle,setMainstyle] = useState({
  })
  const [title,setTitle] = useState('This is an alert')
  const setThings = (name,fame)=>{
  setTitle({
    name:name,
    fame:fame
  })
  setTimeout(() => {
    setThings(null)
  }, 3000);
  // console.log('being called')
  }
  const happens = ()=>{
    setThings("Button is clicked"," alert is switched")
    console.log('called by happens')
  }

  
  // setTitle('After setting')
  // const showalert = (name,message)=>{
  // setFirst({
    // name:name,
    // msg:message
  // })
  // }
  


  return (
    <>
    {/* <Router> */}
    <div style={thestyle}>
    <Navbar title='Home' dropdown='Im_dropdown'/>
    <Alert className="alert alert-warning m-0" role="alert">
    This is a warning alert—check it out!
    </Alert>
    <Alert title = {title}/>
    <div className='container col-4 pd-0'>
    <div><h2 className='mainone'>WELCOME TO REACT</h2></div>
    <h4>Words & letters counter</h4>
    </div>
    <Textarea/>
    <div className='m-2 pd-1 d-flex'>
      <div className='col-1 mt-4'>
    <button className='btn btn-primary txt-light ms-1 mt-1' onClick={happens}>Switch</button>
      </div>
      {/* when you use this routing code , also uncomment the css in the app.css file */}
    {/* <Routes> */}
    {/* <Route path='/about' element={<About/>}/> */}
    {/* </Routes> */}
    {/* <Routes> */}
    {/* <Route path='/' element={<Textarea/>}/> */}
    {/* </Routes> */}
    {/* </div> */}
    {/* <button className='btn btn-danger txt-light ms-4' onClick={clickme3}>Delete</button> */}
    </div>
    </div>
    {/* </Router> */}

    </>
  );
  }
export default App;




































































