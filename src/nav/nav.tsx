//@ts-nocheck
import "./nav.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button/Button";

export function Nav({ move }: any) {
  const [active, setActive] = useState(true);
  const [darken, setDarken] = useState("menu-icon__line");

  // const handleScroll = () => {
  //   if (window.innerHeight < window.pageYOffset + 40) {
  //     setDarken("menu-icon__line menu-icon__line-dark");
  //   } else {
  //     setDarken("menu-icon__line");
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  function toggleNav() {
    var test = document.querySelector("body");
    setActive(!active);
    if (active) {
      test.classList.add("nav-active");
    } else {
      test.classList.remove("nav-active");
    }
  }
  function movePage(element: number) {
    move(element);
    toggleNav();
  }
  return (
    <>
      <div className="nav-fixed">
        <div
          id="burger"
          className="menu-icon"
          onClick={() => {
            toggleNav();
          }}
        >
          <span className={`${darken + " menu-icon__line-left"}`}></span>
          <span className={`${darken}`}></span>
          <span className={`${darken + " menu-icon__line-right"}`}></span>
        </div>
      </div>
      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">
              <h4 className="text-header">Looking for a dev?</h4>
            </li>
            <li className="nav__list-item">
              <h2 className="text-title">Get in touch</h2>
            </li>
            <li className="nav__list-item">
              
              <Button
              target={"_blank"}
              variant="outlined"
              href={process.env.PUBLIC_URL + "/Resume_Isaac_Higgins.pdf"}
              className="button-over"
            >
              Send me an email
            </Button>
            </li>
          </ul>

          {/* <div className="section"> */}
          {/* <h4 className="text-header">Hi There, Hello, I am</h4>
            <h2 className="text-title">Isaac Higgins.</h2>
            <h2 className="text-dark-title">
              An aspiring full-stack developer.
            </h2>
            <p className="spacer">
              I’m a Full-Stack Developer located around Boston. I have a serious
              passion for building web-applications and creating intuitive,
              dynamic user experiences.
            </p> */}
          {/* <Button
              target={"_blank"}
              variant="outlined"
              href={process.env.PUBLIC_URL + "/Resume_Isaac_Higgins.pdf"}
              className="button-over"
            >
              View My Resume
            </Button> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
