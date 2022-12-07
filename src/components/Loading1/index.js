import React from "react";
import loading from "../../img/loading.gif";
import loadingPT from "../../img/loadingPT.gif";
import "./style.css";

const index = () => {
  return (
    <div className="loading">
      <img src={loadingPT} />
    </div>
  );
};

export default index;
