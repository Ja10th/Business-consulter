import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
    <div className=" Hero carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item1 carousel-item active">
          <div className=" container carousel-captions">
            <h1>BizNext helps you to save money and time</h1>
            <p>
              BizNext business theme continues to grow everyday thanks to the
              confidence.
            </p>
            <button className="btn btn-primary">MEET TEAM</button>
            <button className="btn btn-tertiary">TESTIMONIALS</button>
          </div>
        </div>
        <div className="carousel-item carousel-item2">
          <div className=" container carousel-captionss">
            <h1>Don't dream about success just work for it</h1>
            <p>
              BizNext business theme continue to grow everyday thanks to the
              confidence.
            </p>
            <button className="btn btn-primary">MEET TEAM</button>
            <button className="btn btn-tertiary">TESTIMONIALS</button>
          </div>
        </div>
        <div className="carousel-item3 carousel-item">
          <div className="container carousel-captionsss">
            <h1>Work with world class expert in your next project</h1>
            <p>Some representative placeholder content for the third slide.</p>
            <button className="btn btn-primary">MEET TEAM</button>
            <button className="btn btn-tertiary">TESTIMONIALS</button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
};

export default Hero;
