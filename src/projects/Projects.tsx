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

        <div className="project" style={{marginBottom:'40px'}}>
          {ShowCard && (
            <HoverCard>
              <a href="https://github.com/ihiggins/expt" className="preview">
                <img 
                style={{objectFit:'fill'}}
                src="https://github.com/ihiggins/expt/raw/master/Preview.png" />
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
            <h5>Artram</h5>
            <h4>A Social Media Forum</h4>
            <p>
              Artram is a discord themed forum that is similar to reddit. 
              Its built from scratch on AWS but is a WIP.
            </p>
            <ul style={{ flexDirection: "row" }}>
              <li>React</li>
              <li>Node Js</li>
              <li>Redis</li>
              <li>Postgres</li>
              <li>Socket.io</li>
            </ul>
          </div>
          {ShowCard && (
            <HoverCard>
              {" "}
              <a
                href="https://artram.app"
                className="preview"
              >
                <img 
                style={{objectFit:'fill'}}
                src={process.env.PUBLIC_URL + "/artram.png"} />
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
