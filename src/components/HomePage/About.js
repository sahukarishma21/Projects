
import AboutImage from '../../assets/images/about.jpg';
const About = () => {
    return (
        <section class="about container" id="about">
        <div class="about-wrapper">
          <img class="about-image" src={AboutImage} alt="" />
          <div class="about-data">
            <h3 class="about-title">STORY ABOUT US</h3>
            <p class="about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              suscipit. Voluptates consectetur quod tempora id, ipsa aliquid.
              Facilis dolores aspernatur cum, neque, blanditiis quis enim odit
              voluptatum consequatur possimus corporis architecto nostrum!
              Praesentium saepe facere alias fugiat explicabo vel neque, enim
              dolore, id veniam porro veritatis. Rerum error itaque eligendi
            </p>
            <a href="#read-more" class="about-btn">READ MORE</a>
          </div>
        </div>
      </section>
    );
};
export default About;