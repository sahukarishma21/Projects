import React from 'react';
import image1 from '../../assests/images/img2.jpg';
import image2 from '../../assests/images/img3.jpg';
import image3 from '../../assests/images/img4.jpg';

const About = () => {
  const aboutDescriptionStyle = {
    fontWeight: 'bold', // Set the text within "about-description" to bold
  };

  return (
    <section className="about container" id="about">
      <div className="about-wrapper">
        <div className="col-md-6">
          <div className="col program-card">
            <img className="program-card-image" src={image1} alt="Image 1" />
            <h4 className="card-title">Anastasiya Gepp</h4>
            <p className="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit...
            </p>
          </div>
          <div className="col program-card">
            <img className="program-card-image" src={image2} alt="Image 2" />
            <h4 className="card-title">Jenny Wilson</h4>
            <p className="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing...
            </p>
          </div>
          <div className="col program-card">
            <img className="program-card-image" src={image3} alt="Image 3" />
            <h4 className="card-title">Jessica Lewis</h4>
            <p className="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-paragraph">
            <h3 className="about-title">Tropical Adventure</h3>
            <h2>for Students.</h2>
            <p><strong>Student Tropical Vacation: Relax and Recharge</strong></p>
            <p className="about-description" style={aboutDescriptionStyle}>
              . Lorem ipsum dolor sit amet
              <br />
              . Massa quis natoque sit quam
              <br />
              . Eros non pellentesque elit
              <br />
              . tortor id euismod habitant
              <br />
              . Sed suspendisse id in ultrices
            </p>
            <a href="#read-more" className="about-btn">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
