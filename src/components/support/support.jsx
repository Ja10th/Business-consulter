import "./support.css";
import Img1 from "../../assets/Amazon-logo-removebg-preview.png";
import Img2 from "../../assets/cocacola-removebg-preview.png";
import Img3 from "../../assets/images-removebg-preview.png";

const Support = () => {
  return (
    <section className="support">
      <div className="container support__details">
        <article>
          <img src={Img1} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum rem nobis praesentium, ipsam hic sint illo? Labore,
            provident nemo
          </p>
        </article>
        <article>
          <img src={Img2} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum rem nobis praesentium, ipsam hic sint illo? Labore,
            provident nemo
          </p>
        </article>
        <article>
          <img src={Img3} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum rem nobis praesentium, ipsam hic sint illo? Labore,
            provident nemo
          </p>
        </article>
      </div>
      <button className="btn btn-primary">Learn More</button>
    </section>
  );
};

export default Support;
