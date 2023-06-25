import React from "react";

export default function WhyUs(props) {
  return (
    <div className="whybox">
      <img src={props.img} alt="" />
      <h3 className="whytext">
        <b>{props.heading}</b>
      </h3>
      <p className="whytext">{props.desc}</p>
    </div>
  );
}
