import React from "react";

export default function Content() {
  return (
    <div className="text-black mt-28 contr relative">
      <h1 className="text-6xl font-semibold leading-normal p-5">
        Empower recycling <br></br> with{" "}
        <span className="text-blue-600">Trash2Treasure.</span>
      </h1>
      <p className="text-2xl pl-10">
        Seamlessly schedule and transform scrap online.
      </p>

      <div className="button hover:bg-cyan-950">
        <a href="clientschedule">
          <button>Sell Now</button>
        </a>
      </div>
      <div className="button  hover:bg-cyan-950">
        <a href="dealerreg">
          <button>Register as Dealer</button>
        </a>
      </div>
      <div>
        <img
          src="sufinrbg.png"
          alt=""
          className="w-full xl:w-1/3 xl:absolute bottom-40 right-0"
        />
      </div>
      <div className="heading">
        <h1>
          <b>How it works?</b>
        </h1>
      </div>
    </div>
  );
}
