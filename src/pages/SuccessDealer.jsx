import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function SuccessDealer() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <p className="font-mono p-3">
          <b className="text-4xl p-4 text-blue-700">Welcome aboard dealer!!!</b>{" "}
          <br />
          <p className="p-4 pt-5 font-sans text-lime-600">
            Dealer registration successfull. <br /> Thank you for being a part
            of trash2treasure.{" "}
          </p>
        </p>
        <img src="dealersuccess.jpg" alt="" width={400} className="" />
      </div>
      <a href="dealerlogin" className="pl-5 pb-2 text-green-600">
        <b>
          <u>Proceed to Login</u>{" "}
        </b>
      </a>
      <Footer />
    </div>
  );
}
