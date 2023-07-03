import ProgramImage from '../../assets/images/runner.png';
import ProgramImage2 from '../../assets/images/strong.png';
import ProgramImage3 from '../../assets/images/yoga.png';

const Program = () =>{
    return(
        <section class="program container" id="program">
        <h3 class="section-title">OUR PROGRAM</h3>
        <span class="section-subtitle">build your best body</span>
        <div class="row program-row">
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage}
              alt=""
            />
            <h4 class="card-title">Cardio & Strength</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage2}
              alt=""
            />
            <h4 class="card-title">Muscle Building</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
          <div class="col program-card">
            <img
              class="program-card-image"
              src= {ProgramImage3}
              alt=""
            />
            <h4 class="card-title">Stretch & Yoga</h4>
            <p class="card-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              provident id molestiae consequatur omnis labore?
            </p>
          </div>
        </div>
      </section>

    );
};
export default Program;