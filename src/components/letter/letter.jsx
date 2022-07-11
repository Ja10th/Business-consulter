import "./letter.css";

const Letter = () => {
  return (
    <section className="letter">
      <div className="container letter__details">
        <div>
          <h2>Newsletter Subscribe</h2>
          <p>Sign up today for hints, tips and the latest product news.</p>
        </div>

        <div>
          <form className="form">
            <input
              type="text"
              name="name"
              className="placehold"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Letter;
