import "./project.css";

const Project = () => {
  return (
    <section className="project container">
      <div className="ppp">
        <h2>Latest Project</h2>
        <button className="btn btn-project">View More</button>
      </div>
      <div className="project__details">
        <img
          src="https://images.saymedia-content.com/.image/t_share/MTc0NDczMDc1MzY1MzI0NDIy/40-thoughtful-work-anniversary-wishes-for-colleagues-at-work.jpg"
          alt=""
          className="small"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTogDDwskH3ndHnoCuyxDu2fPhUcVH9ffOkB6IMFwp_FiBkq7j5_V0uynlC9uxiqllafU&usqp=CAU"
          alt=""
          className="small"
        />
        <img
          src="https://thewhitecollarjobs.com/wp-content/uploads/2021/05/6.jpg"
          alt=""
          className="large"
        />
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/60995d8ff78695607ba5e166/0x0.jpg?format=jpg&crop=2137,1201,x0,y0,safe&width=1200"
          alt=""
          className="large"
        />
        <img
          src="https://situational.com/wordpress/wp-content/uploads/2018/01/Coworkers-meeting-casually-Challenge-with-leadership-is-situational.png"
          alt=""
          className="small"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBEAXGdoQgfeEi20shlUjoL4Oift1D8Q65lJwKl94TyvdEN2F-jty4GiGJMWwdS1uVj4&usqp=CAU"
          alt=""
          className="small"
        />
      </div>
    </section>
  );
};

export default Project;
