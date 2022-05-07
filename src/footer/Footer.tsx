//@ts-nocheck

import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState, useEffect } from "react";
const Footer = () => {
  const size = useWindowSize();
  if (size.width < 1000) return null;
  return (
    <div className="footer">
      <div>
        <h6> Drag Down</h6>
        <div />
      </div>
      <div>
        <IconButton
          className="icon-button"
          component="a"
          href="https://www.linkedin.com/in/i-higgins/"
        >
          <LinkedInIcon />
        </IconButton>{" "}
        <IconButton
          className="icon-button"
          component="a"
          href="https://github.com/ihiggins"
        >
          <GitHubIcon />
        </IconButton>
        <div />
      </div>
    </div>
  );
};

export default Footer;

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
