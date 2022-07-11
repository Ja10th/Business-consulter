import "./about.css";
import { MdSettings } from "react-icons/md";
import { MdSettingsInputComponent } from "react-icons/md";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

const About = () => {
  return (
    <section className="container about">
      <h3>Welcome to BizNext</h3>
      <p>
        We are experts in this industry for over 100 years experience. What that
        means is you are going to get right solution , please find our services
      </p>
      <div className="about__details">
        <div>
          <article className="art-one">
            <div className="triangle">
              <MdSettings className="about-icons" />
            </div>
            <p className="hide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde
              veritatis quas deleniti facilis. Non veritatis iusto impedit
              corporis
            </p>
          </article>
          <h5>Business Growth</h5>
        </div>
        <div>
          <article className="art-two">
            <div className="triangle">
              <MdSettingsInputComponent className="about-icons" />
            </div>
            <p className="hide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde
              veritatis quas deleniti facilis. Non veritatis iusto impedit
              corporis?
            </p>
          </article>
          <h5>Sustainability</h5>
        </div>
        <div>
          <article className="art-three">
            <div className="triangle">
              <MdOutlineAppSettingsAlt className="about-icons" />
            </div>
            <p className="hide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde
              veritatis quas deleniti facilis. Non veritatis iusto impedit
              corporis?
            </p>
          </article>
          <h5>Performance</h5>
        </div>
      </div>
    </section>
  );
};

export default About;
