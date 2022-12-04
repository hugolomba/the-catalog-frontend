import {
  BarLoader,
  DoubleBubble,
  SlidingPebbles,
  DoubleOrbit,
  HalfMalf,
} from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

import React from "react";

const index = () => {
  return (
    <HalfMalf
      text={"Loading..."}
      center={false}
      width={"150px"}
      height={"150px"}
    />
  );
};

export default index;
