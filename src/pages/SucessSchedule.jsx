import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function SuccessSchedule() {
  return (
    <div>
      <Navbar />
      <center>
        <b className="text-xl p-7 text-green-700">
          Pick-up request sent successfully
        </b>
        <p className="font-mono successclient">
          {" "}
          Wohoo!!! Buckle up your Scraps!!! <br /> Our Pick-up agent would be
          there in a giffy!!!
        </p>
        <img src="successschedule.jpg" alt="" width={600} className="p-10" />
      </center>
      <Footer />
    </div>
  );
}
