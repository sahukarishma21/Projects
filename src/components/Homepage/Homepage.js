
import Header from "../Header/Header";
import Hero from "./Hero";
import About from "./About";
import Program from "./Schedule/Schedule";
import Membership from "./Membership/Membership";
import BookNow from "./Pricing/Pricing";
import Testimonial from "../Testimonials/Testimonials";

function Home() {
  return (
    <div className="App">
     
    
     <Header/>
     <main>
      <Hero/>
      <About/>
      <Program/>
      <Membership/>
      <BookNow/>
      <Testimonial/>
     
      
      
     </main>
    </div>
  );
}

export default Home;
