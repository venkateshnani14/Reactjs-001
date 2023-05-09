import React, { useState } from 'react'
import App from '../App';
import PropTypes from 'prop-types' //shortcut to import proptypes: impt
// import { ReactDOM } from 'react';
// import { Link } from 'react-router-dom'
// import './App.css'

export default function Navbar(props) {
  const [whole,setWhole]=useState({
    overflow:'no'
  })
  const[substyle,setSubstyle]=useState({
   color:'white' ,
   backgroundColor:'white'
  })
  // const nothing = ()=>{
    // if(style.color==='white'){
      // setSubstyle({
        // color:'white'
      // })
    // }
    // else{
      // setSubstyle({
        // color:'black'
      // })
    // }

  // }
  // const aboutme = ()=>{
    // <Router>
      {/* <Routes> */}
        {/* <Route path='/about' component={<About/>} /> */}
      {/* </Routes> */}
    {/* </Router> */}
  // }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{overflow:'hidden'}}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.homename}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.mylinks}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.dropdown}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={substyle}>
            <li><a className="dropdown-item" href="#">Action</a></li>
            {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
            {/* <li><hr className="dropdown-divider"/></li> */}
            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item" id='listitem_portfolio'>
          <a id='link' className="nav-link-active ms-3 text-light" href="#" aria-disabled="true">Portfolio</a>
        </li>
        <li id='listitem_about' className="nav-item">
  <a id='link' className="nav-link-active text-light text-decoration-none ms-3" href="/about" aria-current="page" >About me</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

Navbar.propTypes = {
    
  title: PropTypes.string.isRequired,         // this states that a prop must be passed either default prop/actual prop.Otherwise it throws an error.//
  dropdown: PropTypes.string
}

Navbar.defaultProps = {  //These are only used when there are no actual props passed.
  title:'Default_title',
  dropdown:'Menu'
};

