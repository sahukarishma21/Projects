import HeroImage from '../../assets/images/bg-hero.jpg';
const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${HeroImage})` }}>


    <h1 class="hero-title">
      THE BEST FITNESS STUDIO <br />
      IN THE CITY
    </h1>

    <a href="signin" class="hero-btn-get-started">GET STARTED</a>
  </section>
    );
};
export default Hero;