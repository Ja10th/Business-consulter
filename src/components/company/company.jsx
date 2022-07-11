import "./company.css";

const Company = () => {
  return (
    <section className="company">
      <h2>About Our Company</h2>

      <div className="container company__details">
        <img
          src="https://www.thoughtfulleader.com/wp-content/uploads/2021/02/Difficult-Colleague-Work-Relationship-Main.jpg"
          alt=""
        />
        <div>
          <h6>
            For nearly forty years, we have taken a personal approach highly.
          </h6>
          <p>
            We are Triumph located in newyork city,USA. It is a long established
            fact that a reader will be distracted by the readable content
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the master-builder of human happiness.
          </p>
          <button class="btn company-btn">Read More</button>
        </div>
        <img
          src="https://blog.hubspot.com/hs-fs/hubfs/Agency_Post/Blog_Images/DataHero_Customers_by_Close_Date.png?width=669&name=DataHero_Customers_by_Close_Date.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Company;
