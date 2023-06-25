import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DealerForm from "./DealerForm";

export default function DealerReg() {
  return (
    <div>
      <Navbar />
      <div className="dpage">
        <DealerForm />
      </div>
      <Footer />
    </div>
  );
}
