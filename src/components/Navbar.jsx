import React from 'react'
import {Link } from "react-router-dom";


const Navbar =()=>  {

  
    return (
      <>
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
  
        

        <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
         <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
         {/* <Link className="nav-link active" aria-current="page" to="/general">General</Link> */}
         <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
         <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
         <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
         <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>

        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
          
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
    )
  
}

export default Navbar