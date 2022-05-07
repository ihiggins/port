//@ts-nocheck
import "./nav.css";
import { useState, useEffect } from "react";

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
        {/* <div className="nav__content">
          <ul className="nav__list">
            <li
              className="nav__list-item"
              onClick={() => {
                movePage(0);
              }}
            >
              Home
            </li>
            <li
              className="nav__list-item"
              onClick={() => {
                movePage(1);
              }}
            >
              About
            </li>
            <li
              className="nav__list-item"
              onClick={() => {
                movePage(2);
              }}
            >
              Experience
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}
