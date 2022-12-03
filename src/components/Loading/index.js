import {
  BarLoader,
  DoubleBubble,
  SlidingPebbles,
  DoubleOrbit,
} from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

import React from "react";

const index = () => {
  return (
    <DoubleBubble
      text={"Loading..."}
      center={false}
      width={"150px"}
      height={"150px"}
    />
  );
};

export default index;
