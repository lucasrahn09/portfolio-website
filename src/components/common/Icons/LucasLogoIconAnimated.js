import { animated, config, easings, useSpring } from "react-spring";
import React, { useRef } from "react";
import "../../../styles/logoAnimation.css";
import { useIntersectionObserver } from "../../hooks";
import useWindowDimensions from "../../hooks/effects/useWindowDimensions";

const LucasLogoIconAnimated = (props, { width, height }) => {
  const triggerRef = useRef();
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: false,
  });

  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  const animation = useSpring({
    from: { x: 0, y: 0, opacity: 1, width: "200px" },
    to: {
      y: -windowHeight * 0.47,
      x: -windowWidth * 0.5,
      width: "20px",
      opacity: 0,
    },
    config: {
      mass: 1,
      tension: 80,
      friction: 60,
      easing: easings.easeInCirc,
    },
    // config: { duration: 2000, easing: easings.easeInOutCirc },
    delay: 2500,
  });

  return (
    <>
      <div ref={triggerRef} />
      <animated.div
        style={{
          ...animation,
          marginLeft: "auto",
          marginRight: "auto",
          height: "90vh",
          verticalAlign: "middle",
        }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
          className={dataRef?.isIntersecting ? "active" : ""}
        >
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#456aff"
            stroke="#456aff"
            strokeWidth="6"
          >
            <path
              d="M572 1726 l-413 -243 1 -484 c0 -368 3 -487 13 -495 27 -25 831 -474
841 -470 6 2 195 112 419 243 l408 240 -1 484 c0 366 -4 487 -13 495 -16 14
-827 474 -836 473 -3 0 -192 -109 -419 -243z m-32 -383 c0 -32 -18 -145 -40
-252 -37 -182 -46 -241 -36 -241 3 0 17 5 32 10 26 10 43 1 44 -23 0 -11 -120
-67 -143 -67 -29 0 -67 45 -67 79 0 17 16 106 35 198 20 93 39 206 43 253 8
94 11 97 95 99 l37 1 0 -57z m722 0 c28 -25 24 -79 -8 -99 -56 -37 -114 -13
-114 47 0 54 81 89 122 52z m-475 -199 c3 -9 -6 -71 -20 -138 -15 -67 -27
-127 -27 -134 0 -13 38 -16 56 -4 12 8 54 196 54 242 0 35 1 36 73 45 l57 7 0
-28 c-1 -16 -11 -83 -24 -149 -13 -66 -20 -124 -16 -128 4 -5 17 -4 28 2 21
11 32 6 32 -16 0 -18 -68 -60 -112 -68 -31 -6 -41 -3 -62 18 l-25 25 -47 -24
c-60 -30 -89 -30 -119 1 -33 32 -32 52 8 222 13 53 13 65 1 88 -24 46 -26 44
109 53 18 1 30 -4 34 -14z m462 -6 c14 -37 -21 -269 -59 -399 -37 -123 -126
-171 -221 -117 -42 23 -51 38 -39 58 7 11 14 11 38 1 65 -27 96 14 127 163 27
133 31 230 11 262 -22 32 -13 41 39 47 90 9 95 8 104 -15z m271 -4 l10 -26 31
26 c54 46 113 25 107 -37 -2 -23 -13 -38 -37 -54 -42 -29 -43 -29 -62 2 -13
22 -17 24 -33 12 -19 -14 -55 -166 -56 -233 0 -36 -16 -44 -87 -44 -41 0 -43
1 -43 30 0 17 9 71 20 122 26 116 27 148 5 181 -19 30 -16 33 45 40 84 9 90 8
100 -19z"
              className="svg-elem-1"
            ></path>
          </g>
        </svg>
      </animated.div>
    </>
  );
};

export default LucasLogoIconAnimated;
