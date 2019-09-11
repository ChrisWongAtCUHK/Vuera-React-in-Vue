import React from "react";

export default props => (
  <div>
    <h2 onClick={props.reset}>{props.message}</h2>
  </div>
);
