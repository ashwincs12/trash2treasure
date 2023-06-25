import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex bg-gradient-to-r from-sky-500 to-indigo-500 bg-center bg-cover items-center">
        <li>
          <h3 className="font-normal hover:font-bold text-2xl logo container h-14">
            Trash2Treasure
          </h3>
        </li>
        <li className="no-underline text-white px-5 ml-20">
          <b>
            <a href="/"> Home </a>
          </b>
        </li>
        <li className="no-underline text-white px-3">Why Us?</li>
        <li className="no-underline text-white px-3">Scrap Rates</li>
        <li className="no-underline text-white px-3">Privacy Policy</li>
        <li className="no-underline text-white px-3">Blog</li>
        <li className="no-underline text-white px-3">
          <a href="dealerlogin">Login for Dealers</a>{" "}
        </li>
        <li className="no-underline text-white app">
          <img src="playstore.png" alt="" width="200px" />
        </li>
      </ul>
      <div className="alert">
        <b>We are currently operational in Sreekrishnapuram, Palakkad</b>
      </div>
    </div>
  );
}
