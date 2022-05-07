//@ts-nocheck

import clamp from "lodash-es/clamp";
import { useSprings, animated, useSpringRef } from "react-spring";
import { useGesture, useDrag, useScroll } from "@use-gesture/react";
import styles from "./Styles.module.scss";
const Layout = ({ children }: any) => {
  console.log(children)
  var pages = children;
  let index = 0;
  const height = window.innerHeight;

  const [props, api] = useSprings(pages.length, (i) => ({
    y: i * height,
    scale: 1,
    display: "block",
  }));

  const animate = ({
    active,
    movement: [mx, my],
    direction: [xDir, yDir],
    cancel,
    down,
  }) => {
    if (active && Math.abs(my) > height / 2) {
      index = clamp(index + (yDir > 0 ? -1 : 1), 0, pages.length - 1);
      cancel();
    }
    api.start((i) => {
      if (i < index - 1 || i > index + 1) {
        return { display: "none", immediate: true };
      } else {
        const y = (i - index) * height + (active ? my : 0);
        const scale = active ? 1 - Math.abs(my) / height / 2 : 1;
        return { y, scale, display: "block" };
      }
    });
  };

  const bind = useGesture(
    {
      onDrag: (state) => animate(state),
      onWheel: (state) => animate(state),
    },
    {
      wheel: { enabled: true },
      drag: { enabled: true, passive: true },
    }
  );

  console.count("APP RENDER CYCLES");

  return (
    <div className={styles.layout} {...bind()}>
      {props.map(({ y, display, scale }, i) => (
        <animated.div
          className={styles.slide}
          key={i}
          style={{ display, y, scale }}
        >
          {pages[i]}
        </animated.div>
      ))}
    </div>
  );
};

export default Layout;
