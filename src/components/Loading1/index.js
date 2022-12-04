import React from "react";
import loading from "../../img/loading.gif";
import "./style.css";

const index = () => {
  return (
    <div className="loading">
      <img src={loading} />
    </div>
  );
};

export default index;
