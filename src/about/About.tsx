//@ts-nocheck
import { useState, useEffect } from "react";
import HoverCard from "../HoverCard";
import "./Styles.scss";
const About = () => {
  const size = useWindowSize();

  let showSide = size.width > 1000;
  return (
    <div className="content">
      <div className="section">
        <div className="section-heading">
          <span>02.</span>
          <h3>A Little Bit About Me. </h3>
        </div>
        <div className="about-content">
          <div>
            <HoverCard>
              <div className="picture">
                <img src={process.env.PUBLIC_URL + "/me.jpg"}></img>
              </div>
            </HoverCard>
            <p>
              Hi there, I'm a software engineer based in Boston, Ma. I currently work at
              Retail Business Services.
              <br />
              <br />
              Im a big fan of building full-stack web applications. Im most
              familar with Javascript and Python development with Postgres and Mongodb data solutions.
            </p>
          </div>
          {showSide && (
            <div className="skills">
              <div className="skills-title">Some of my skills.</div>
              <div>
                <div className="tag-progress">
                  <p>
                    React <span>10/10</span>
                  </p>
                  <progress className="progress" max="10" value="10"></progress>
                </div>
                <div className="tag-progress">
                  <p>
                    Node js <span>9/10</span>
                  </p>
                  <progress className="progress" max="10" value="9"></progress>
                </div>
                <div className="tag-progress">
                  <p>
                    Python <span>8/10</span>
                  </p>
                  <progress className="progress" max="10" value="8"></progress>
                </div>
                <div className="tag-progress">
                  <p>
                    SQL/NoSQL <span>9/10</span>
                  </p>
                  <progress className="progress" max="10" value="9"></progress>
                </div>
                <div className="tag-progress">
                  <p>
                    AWS <span>6/10</span>
                  </p>
                  <progress className="progress" max="10" value="6"></progress>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
