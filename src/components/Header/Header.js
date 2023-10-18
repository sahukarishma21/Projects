import { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const [show, setShow]=useState(false);
   
    return (
     <header className="header" id="home">
    <nav class="nav container">
      


      <div className={`nav-menu ${show ? 'show-menu' : ''}`} id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link"  onClick={()=> setShow(!show)}>
                Home</a>
                
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={()=> setShow(!show)}>
                About</a>
          </li>
          <li className="nav-item">
            <a href="#schd" className="nav-link"  onClick={()=> setShow(!show)}>
                Schedules</a>
          </li>
          <li className="nav-item">
            <a href="#hero" className="nav-link"  onClick={()=> setShow(!show)}>
                Membership</a>
          </li>
          <li className="nav-item">
            <a href="#book-now" className="nav-link"  onClick={()=> setShow(!show)}>
                Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#offer" className="nav-link"  onClick={()=> setShow(!show)}>
                Offer</a>
          </li>
          <div className="nav-close" id="nav-close" onClick={()=> setShow(!show)}>
            <i className="ri-close-line nav-close"></i>
          </div>
        </ul>

        <Link to="/signin" className="nav-button">
      Courses
    </Link>
      </div>

      <div class="nav-toggle" onClick={()=> setShow(!show)}>
        <i class="ri-menu-4-line"></i>
      </div>
     

      <div class="nav-toggle" onClick={()=> setShow(!show)}>
        <i class="ri-menu-4-line"></i>
      </div>
    
    </nav>
  </header>
    );
};
export default Header;