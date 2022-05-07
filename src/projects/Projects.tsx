//@ts-nocheck
import { useState, useEffect } from "react";
import HoverCard from "../HoverCard";

const Projects = () => {
  const size = useWindowSize();

  let ShowCard = size.width > 650;
  return (
    <div className="content">
      <div className="section">
        <div className="section-heading">
          <span>03.</span>
          <h3>Some things I made. </h3>
        </div>

        <div className="project">
          {ShowCard && (
            <HoverCard>
              <a href="https://github.com/ihiggins/expt" className="preview">
                <img src="https://github.com/ihiggins/expt/raw/master/Preview.png" />
              </a>
            </HoverCard>
          )}
          <div className="content">
            <h5>EXPT</h5>
            <h4>A Quiz Answering App</h4>
            <p>
              Expt is a cross-platform app that makes answering online tests
              "easier". It Scrapes data from Google and Quizlet documents to
              find answers.
            </p>
            <ul>
              <li>Electron</li>
              <li>React</li>
              <li>Typescript</li>
              <li>Mui 5</li>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="content" style={{ textAlign: "left" }}>
            <h5>Legislates</h5>
            <h4>NLP News Aggregator</h4>
            <p>
              Legislates is a government news Aggregator powered by AI Natural
              Language Processing.
            </p>
            <ul style={{ flexDirection: "row" }}>
              <li>React</li>
              <li>Node Js</li>
              <li>Python</li>
              <li>Postgres</li>
            </ul>
          </div>
          {ShowCard && (
            <HoverCard>
              {" "}
              <a
                href="https://github.com/ihiggins/legislates-web"
                className="preview"
              >
                <img src="https://github.com/ihiggins/legislates-web/raw/master/preview.png" />
              </a>
            </HoverCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
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
