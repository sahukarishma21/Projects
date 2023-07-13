import React from "react";
import "./About.css";
import ME from '../../assets/Karishma.jpg';

export default function About() {
  return (
    <section id="about">
      <hr />
      
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="IMG" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <h3> My Name Is Karishma Sahu, I am a Front-End Developer</h3>
            <br />
            <p>
            As a passionate front-end developer,
           I have gained proficiency in key technologies
            such as JavaScript, ReactJS, HTML, CSS, and Redux.
             Through my dedication and self-motivation, 
             I continuously strive to enhance my skills and 
             deliver exceptional website applications. My strong
              work ethic ensures that I am committed to producing 
              high-quality results.
            </p>
            <br />

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}