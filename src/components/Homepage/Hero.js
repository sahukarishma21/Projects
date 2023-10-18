import React from 'react';
import HeroImage from '../../assests/images/image1.jpg'; // Make sure the path is correct

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '50%', // Adjust the width as needed
    borderRadius: '50%', // Make the image round
  },
  textContainer: {
    maxWidth: '50%', 
   
   
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  
};

const Hero = () => {
  return (
    <section>
      <div style={styles.container}>
        <div style={styles.textContainer}>
        <p style={styles.boldText}>Discover the beauty of the tropics</p>
          <h1 className="hero-title">
            <span><h1>Tropical</h1></span>
                <span><h1>Destinations</h1></span>
            <span>For Students</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            suscipit.
            <br />
            Voluptates consectetur quod tempora id, ipsa aliquid.
          </p><br/>
          <a href="signin" className="hero-btn-get-started">
           SIGN UP
          </a>
        </div>
        <img src={HeroImage} alt="Your Image" style={styles.image} />
      </div>
    </section>
  );
};

export default Hero;
