import {  AiOutlineMail  } from "react-icons/ai";
import { FaCheckDouble  } from "react-icons/fa"
import './Content.css'
const Content= () =>{
    return(
   
        <section class="membership container" id="pricing">
       
        <div class="row membership">
          <div class="sarter-card">
            <div>
              <span class="membership-plan">Free started</span>
              <p class="card-description membership-description">The quickest and easiest way to try protocols with basic functionalities</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 8 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 3gb storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                <a>
                <AiOutlineMail className='emai'/>
                Email support
                </a>
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                <a>
                <FaCheckDouble className="logo"/>
                basic of document,task flow,voting,accounting,notes included
                </a>
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">GET STARTED</a>
          </div>
          <div className="sarter-card active">
            <div>
              <span class="membership-plan">Enterprise plan</span>
              <p class="card-description membership-description">Effortlessly,customize and fine tune service as yours need shift and ensuring the perfect tools for service</p>
            </div>
            <ul class="membership-feature">
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                more than 75 users
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                upto 60gb  storage
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                customization of all other feature
              </li>
              <li class="membership-list">
                <i class="ri-checkbox-circle-fill membership-checklist"></i>
                <a>
             <AiOutlineMail className="ema"/>
                Email support + chat support
                </a>
              </li>
            </ul>
            <a href="#get-started" class="membership-btn">GET STARTED</a>
          </div>
          </div>
      </section>
    

    );
};
export default Content;