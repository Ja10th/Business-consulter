import "./news.css";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";

const News = () => {
  return (
    <section className="new">
      <div className="news container">
        <div className="news-title">
          <h2>Latest News</h2>
          <button className="btn btn-news">More News</button>
        </div>
        <div className="news__details">
          <article className="news__detail">
            <p>21st August 2021</p>
            <h5>Wealth building tips for modern day</h5>

            <div>
              <FaUserCircle className="news-logo" />
              <small>By Anthony</small>
            </div>
            <div>
              <AiOutlineComment className="news-logo" />
              <small>17 comments</small>
            </div>
          </article>
          <article className="news__detail">
            <p>26st August 2021</p>
            <h5>Improve skills to be great</h5>

            <div>
              <FaUserCircle className="news-logo" />
              <small>By Anthony</small>
            </div>
            <div>
              <AiOutlineComment className="news-logo" />
              <small>17 comments</small>
            </div>
          </article>
          <article className="news__detail">
            <p>21st August 2021</p>
            <h5>Wealth building tips for modern day</h5>

            <div>
              <FaUserCircle className="news-logo" />
              <small>By Anthony</small>
            </div>
            <div>
              <AiOutlineComment className="news-logo" />
              <small>17 comments</small>
            </div>
          </article>
          <article className="news__detail">
            <p>21st March 2021</p>
            <h5>3 ways to build technology for business</h5>

            <div>
              <FaUserCircle className="news-logo" />
              <small>By Anthony</small>
            </div>
            <div>
              <AiOutlineComment className="news-logo" />
              <small>17 comments</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default News;
