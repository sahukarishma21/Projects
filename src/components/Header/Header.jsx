import React from 'react';
import './Header.css'
import Resume from './Resume';



export default function Header() {
  return (
   <header>
    <div className="container header__container">
     <h5>Hello I'm</h5>
     <h1>Karishma Sahu</h1>
     <h5 className='text-light'>Front-End Developer</h5>
     <Resume/>
     
     <div className="me">
      
     </div>
      
     </div>
    
   
   
   </header>
  )
}