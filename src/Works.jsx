import React from "react";

export default function Works(props) {
  return (
    <div className="box">
      <div className="boxtext">
        <b>{props.text}</b>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}
