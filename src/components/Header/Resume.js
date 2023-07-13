import React from 'react'
import CV from '../../assets/Karishma Sahu Resume (2).pdf';

export default function Resume() {
  return (
    <div className='cta'>
<a href={CV} target="blank" className='btn'>Resume</a>
<a href='#contact' className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}