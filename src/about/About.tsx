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
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHZP76XRKYODw/profile-displayphoto-shrink_800_800/0/1594911606932?e=1657152000&v=beta&t=CGFr62Aua3Z8ea_rc7OYW1lXVpkZ1Eby3wXScEbX7Gs"></img>
              </div>
            </HoverCard>
            <p>
              Hi there, I'm a student at the University of Massachusetts Boston
              majoring in Information Technology.
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
