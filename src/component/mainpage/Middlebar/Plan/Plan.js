const Price = () =>{
    return(
   
        <section class="membership container" id="pricing">
        <h3 class="section-title">choose a plan </h3>
        <div class="row membership">
          <div class="col membership-card">
            <div>
              <span class="membership-plan">Basic Plan</span>
              <h4 class="card-title membership-title">$30</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 25 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 25gb storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                Email support
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">GET STARTED</a>
          </div>
          <div class="col membership-card active">
            <div>
              <span class="membership-plan">Medium Plan</span>
              <h4 class="card-title membership-title">$60</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 50 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 60gb  storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                Email support + chat support
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">GET STARTED</a>
          </div>
          <div class="col membership-card">
            <div>
              <span class="membership-plan">Premiere Plan</span>
              <h4 class="card-title membership-title">$90</h4>
              <p class="card-description membership-description">per month</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 75 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 100gb storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                Email + chat + whatsapp support
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">GET STARTED</a>
          </div>
        </div>
      </section>
    

    );
};
export default Price;