import "./color.css";
import { MdSettingsSuggest } from "react-icons/md";

const Color = () => {
  function changeWidth() {
    colorSett.style.width = "40px";
    Boxes.style.display = "none";
  }
  function changeWidthTwo() {
    colorSett.style.width = "280px";
    Boxes.style.display = "flex";
    Boxes.style.background = "#fff";
  }
  return (
    <div className="color">
      <div className="color-set" onClick={changeWidthTwo} onMouseOver={changeWidth}>
        <MdSettingsSuggest
          className="color-set-icon"
          
        />
      </div>
      <div className="boxes">
        <div className="orange" onClick={changeOrange}></div>
        <div className="navy" onClick={changeNavy}></div>
        <div className="light-blue" onClick={changeLblue}></div>
        <div className="brown" onClick={changeBrown}></div>
        <div className="red" onClick={changeRed}></div>
        <div className="purple" onClick={changePurple}></div>
      </div>
    </div>
  );
};

function changeOrange() {
  document.documentElement.style.setProperty("--primary", "orange");
}
function changeNavy() {
  document.documentElement.style.setProperty("--primary", "navy");
}
function changeLblue() {
  document.documentElement.style.setProperty("--primary", "lightBlue");
}
function changeBrown() {
  document.documentElement.style.setProperty("--primary", "brown");
}
function changeRed() {
  document.documentElement.style.setProperty("--primary", "red");
}
function changePurple() {
  document.documentElement.style.setProperty("--primary", "purple");
}

const colorSett = document.querySelector(".color-set");
const Boxes = document.querySelector(".boxes");

export default Color;
