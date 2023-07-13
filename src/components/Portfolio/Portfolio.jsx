import React from "react";
import "./Portfolio.css";
import IMG1 from '../../assets/img1.png';
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio_section">
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG1} alt="IMG1" />
          </div>
          <h3>Twitter Clone </h3>
          <p>
          Twitter is a free social networking site where users broadcast short posts
           known as tweets . These tweets can contain text, videos, photos or links.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/twitterclone"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://twitter-lite-clone1.netlify.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deploy Link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG2} alt="IMG2" />
          </div>
          <h3>Kanban Board </h3>
          <p>
          A Kanban board is an agile project management tool designed to help 
          visualize work, limit work-in-progress, and maximize efficiency .
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/kanban-Board"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://kanban-board-project-13w6.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
             Deploy Link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG3} alt="IMG3" />
          </div>
          <h3>Google Doc </h3>
          <p>
          Google Docs is a free web-based word processor in which documents can be
           created, edited and stored as part of the Google Docs Editors .
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/Google-Doc"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://google-doc-xi.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deploy Link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG4} alt="IMG4" />
          </div>
          <h3>Movies App </h3>
          <p>
          film , also called motion picture or movie , series of still photographs on
          film, projected in rapid succession onto a screen by means of light.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/Movies-app"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://project-iota-ten.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
              Deploy Link
            </a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG5} alt="IMG5" />
          </div>
          <h3>Restaurant Website</h3>
          <p>
          A restaurant is a business that prepares and serves food and drinks to 
          customers . 
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/RestaurantWebsite"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://restaurant-website-five-alpha.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
             Deploy Link
            </a>
          </div>
          </article>
          <article className="portfolio__items">
          <div className="porfolio__item-image">
          <img src={IMG6} alt="IMG6" />
          </div>
          <h3>GYM Website</h3>
          <p>
          This project is based on GYM Site.Users can
           check the overview and features of the Gym.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/sahukarishma21/Projects/tree/GYM"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://gym-lyart.vercel.app/"
              target="blank"
              className="btn btn-primary"
            >
             Deploy Link
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}