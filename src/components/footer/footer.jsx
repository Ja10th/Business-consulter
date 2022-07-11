import "./footer.css";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer__details">
        <article className="foot-logoarea">
          <div className=" area1">
            <AiOutlineCodeSandbox className="logo" />
            <div className="foot-row1">
              <h2>BizNext.</h2>
              <small>Solutions for your business.</small>
            </div>
          </div>
          <p>
            Over 24 years experience and knowledge international standards,
            technologicaly changes and industrial systems, we are dedicated to
            provides seds the best and economical solutions to our valued
            customers.
          </p>
          <button className="btn btn-primary">Read More</button>
        </article>
        <article className="foot-links">
          <h4>Useful Link</h4>
          <div className="link-row">
            <li>Business Growth</li>
            <li>Sustainability</li>
            <li>Performance</li>
            <li>Organization</li>
            <li>Customer Insights</li>
            <li>Advanced Analytics</li>
            <li>Free Consultation</li>
            <li>Testimonials</li>
            <li>Customer FAQ’s</li>
            <li>About BizNext</li>
          </div>
        </article>
        <article className="foot-news">
          <h4>Latest News</h4>
          <div>
            <h6>February 14,2017</h6>
            <p>Seminar for improve business profit & loss</p>
          </div>
          <div>
            <h6>January 17,2017</h6>
            <p>Experts Openion for save money for your future.</p>
          </div>
        </article>
      </div>
      <div className="container footer__second">
        <div>
          <MdPhoneInTalk className="logo-icons" />
          <div className="nav-row">
            <h6>Call Us</h6>
            <p>+2347045380644</p>
          </div>
        </div>
        <div>
          <MdEmail className="logo-icons" />
          <div className="nav-row">
            <h6>Email at</h6>
            <p>Jamie@help.com</p>
          </div>
        </div>
        <div>
          <BsClockHistory className="logo-icons" />
          <div className="nav-row">
            <h6>Address</h6>
            <p>185, Triumph Street, Los Angeles, USA.</p>
          </div>
        </div>
      </div>
      <div className=" container end">
        <div>
          <small>Copyrights © 2017 All Rights Reserved. Powered by BizNext..</small>
        </div>
      
       <div className="end2">
        <li>Legal </li>
        <li>Sitemap</li>
        <li>Privacy Policy </li>
        <li>Terms & Condition</li>
        </div>
      </div>
    </section>
  );
};

export default Footer;
