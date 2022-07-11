import React from "react";
import "./slide.css";
import { BsPeopleFill } from "react-icons/bs";
import { BsPersonBoundingBox } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { FiCoffee } from "react-icons/fi";
import CountUp from "react-countup";

const Slide = () => {
  return (
    <div className="countb">
      <div className="container count__container">
        <article className="count">
          <div>
            <BsPeopleFill className="slide-logo"/>
            <p className="count__ppp">
              <CountUp end={1472} />
            </p>
          </div>
          <p> Projects Completed </p>
        </article>
        <article className="count">
          <div>
            <BsPersonBoundingBox className="slide-logo"/>
            <p className="count__ppp">
              <CountUp end={285} />+
            </p>
          </div>
          <p>Experienced Workers </p>
        </article>
        <article className="count">
          <div>
            <CgAwards className="slide-logo"/>
            <p className="count__ppp">
              <CountUp end={625} />
            </p>
          </div>
          <p> National Awards won </p>
        </article>
        <article className=" count-last count">
          <div>
            <FiCoffee className="slide-logo"/>
            <p className="count__ppp">
              <CountUp end={3427} />
            </p>
          </div>
          <p>Cups of Coffee</p>
        </article>
      </div>
    </div>
  );
};

export default Slide;
