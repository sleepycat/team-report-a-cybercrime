import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = () => (
  <svg style={{ height: "2.6em", width: "3em", display: "inline-block" }}>
    <g id="Layer_1">
      <g class="cls-3" clipPath="url(#clip-path)" id="g251">
        <circle
          class="cls-4"
          cx="54"
          cy="54"
          r="54"
          id="circle11"
          style={{ fill: "#272f6a", fillOpacity: "1" }}
        />
        <circle
          class="cls-5"
          cx="54"
          cy="54"
          r="49.650002"
          id="circle13"
          style={{ fill: "none", stroke: "#24b3b8", strokeMiterlimit: "10" }}
        />
        <path
          class="cls-6"
          d="m 37.15,36.13 c 0,0 2.79,-3.44 3.34,-4.09 0.55,-0.65 3,-2.34 7.57,-2.34 a 10.32,10.32 0 0 0 3.64,-1.49 c 0,0 3.08,-2.64 4.13,-2.2 a 1.34,1.34 0 0 1 0.42,0.37 c 0,0 -1.72,3.4 -1.61,4.54 A 14.43,14.43 0 0 0 55,35.18 c 0,0 2.73,6.24 4.07,8.48 0,0 2.13,5 2.17,5.57 l 0.45,-0.26 c 0,0 -1.69,-13.68 4.22,-18.65 0,0 8,-6.2 15.76,0.08 a 11.37,11.37 0 0 1 3.33,11.21 9.21,9.21 0 0 1 -8.44,6 9.71,9.71 0 0 1 -4.22,-0.79 c 0,0 2.87,-1.83 0.86,-3.36 0,0 -2.88,-0.07 -4.52,5.72 0,0 -2.13,8.44 -2.69,9.08 a 5.83,5.83 0 0 1 -3.37,3.62 2.62,2.62 0 0 1 -0.14,2.8 c 0,0 -1.81,3.56 -1.73,4.32 0.08,0.76 -0.19,1.68 1.12,2 0,0 3.29,0.64 2.69,1.8 0,0 0.3,1.6 -2.84,2.13 0,0 -5.23,0.48 -5.94,-1.69 0,0 0.41,-3.47 -3.66,-4.33 a 6.11,6.11 0 0 0 -5.87,1.83 3.13,3.13 0 0 0 -0.48,1.72 c 0.07,0.86 -0.34,1.72 -2.21,2.17 0,0 -4.53,1.42 -6.41,-0.83 0,0 -1.43,-1.53 1.6,-2.57 0,0 1.9,-0.56 1.86,-1.12 0,0 -3.1,-4.26 -2.61,-5.76 0,0 -0.64,0 1.87,-4.67 0,0 -0.27,-3.92 -0.83,-4.44 a 9.43,9.43 0 0 1 0.64,-6.58 c 0,0 4,-4.78 4,-5.3 0,0 1,-1.87 -2.35,-2.24 0,0 -4,0.11 -4.55,-2.06 a 1.59,1.59 0 0 1 -0.31,-1.9 z"
          id="path15"
          style={{ fill: "#24b3b8" }}
        />
        <path
          class="cls-4"
          d="m 49.07,44 a 0.69,0.69 0 0 0 0.42,-0.46 c 0.35,-1.18 1.53,-5.11 2,-5.52 0.47,-0.41 3.14,0.71 3.44,1.16 0.3,0.45 -0.45,1.64 -0.71,1.71 a 12.43,12.43 0 0 0 -1.47,1.51 0.71,0.71 0 0 0 0.48,1.18 c 1.84,0.13 4.83,0.76 6.11,3.44 a 0.38,0.38 0 0 1 0.09,0.45 5.1,5.1 0 0 0 -1,3.35 l 0.2,1.59 a 0.73,0.73 0 0 1 -0.18,0.57 c -0.44,0.47 -1.65,1.3 -4.79,1.33 0,0 -1.8,0.18 -1.12,2.42 0,0 0.52,1.61 1.53,1.72 1.01,0.11 2.16,0.26 2.16,0.26 0,0 0.15,0.3 -0.33,0.56 a 13.91,13.91 0 0 0 -1,1.59 1.24,1.24 0 0 1 -1.82,0.48 6.55,6.55 0 0 0 -1.91,-1 8.9,8.9 0 0 1 -5,-3.52 0.73,0.73 0 0 1 0.28,-1 c 0.92,-0.46 2.44,-1.41 2.46,-2.61 0,0 0.62,-2.44 -1.41,-3 a 0.72,0.72 0 0 0 -0.5,0.07 25.9,25.9 0 0 1 -3.88,1.76 c 0,0 -1.68,0.15 -0.63,-2.69 a 8.86,8.86 0 0 1 3.94,-4.29 v 0 C 46.69,45 48.13,44.41 49.07,44 Z"
          id="path17"
          style={{ fill: "#272f6a" }}
        />
        <path
          class="cls-4"
          d="m 43.58,34.63 c 0,0 -0.4,-2.51 1.37,-2.16 0,0 1.08,0.57 0.8,1.36 0,0 0.11,1.49 -2.17,0.8 z"
          id="path19"
          style={{ fill: "#272f6a" }}
        />
      </g>
    </g>
  </svg>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#272f6a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Logo />
        <Link
          to="/"
          style={{
            color: `white`,
            verticalAlign: "top",
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
