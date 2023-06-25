import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footercolumn">
        <b>
          {" "}
          Contact Us: <br />
          <br />
        </b>
        <span className="flex">
          <img src="phone.png" alt="" width={20} />
          <p className="p-1">+91 9999999999 </p>
        </span>{" "}
        <span className="flex">
          <img src="email.png" alt="" width={20} />{" "}
          <p className="p-1">info@trash2treasure.com </p>
        </span>
        <br />
        <b>
          Customer Support available <br /> from 10am - 7pm
        </b>{" "}
        <br />
        <br />
        Find Us Here
        <span className="flex">
          <img src="insta.png" alt="" width={20} className="m-2" />
          <img src="fb.png" alt="" width={20} className="m-2" />
          <img src="twtr.png" alt="" width={20} className="m-2" />
        </span>
      </div>
      <div className="footercolumn">
        <img src="t2t.png" alt="" />
        <b>Corr Address:</b>
        <br />
        Technology Business Incubator (TBI), GEC Palakkad, <br />
        Sreekrishnapuram, Kerala
      </div>
    </div>
  );
}
