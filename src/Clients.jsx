import React from "react";

export default function Clients() {
  return (
    <div>
      <h1 className="heading">Our happy clients!</h1>
      <div className="flex justify-between p-10">
        <div className="wrapper">
          <img src="gec.png" alt="" />
          <h3>GEC Palakkad</h3>
        </div>
        <div className="wrapper">
          <img src="mitra.jpg" alt="" />
          <center>
            <h3>Mitra Hospital</h3>
          </center>
        </div>
        <div className="wrapper">
          <img src="pmt.jpg" alt="" width={225} />
          <h3>
            <center>
              Paramount Restaurant <br /> & Bakes
            </center>
          </h3>
        </div>
        <div className="wrapper">
          <img src="sanjuf.jpeg" alt="" width={150} />
          <h3>
            <center> Sanju Fashion </center>
          </h3>
        </div>
      </div>
    </div>
  );
}
