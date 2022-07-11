import "./nav.css";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import Navtwo from "./nav-two";

const Nav = () => {
  return (
    <>
      <section className="container first-nav">
        <div>
          <AiOutlineCodeSandbox className="logo" />
          <div className="nav-row1">
            <h2>BizNext.</h2>
            <p>Solutions for your business.</p>
          </div>
        </div>
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
            <h6>Office hrs</h6>
            <p>8am-4pm, Mon-Fri</p>
          </div>
        </div>
      </section>
      <Navtwo />
    </>
  );
};

export default Nav;
