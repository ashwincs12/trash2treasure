import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Works from "./Works";
import WhyUs from "./WhyUs";
import Clients from "./Clients";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <div className="inline-flex">
        <Works text="Schedule a Pickup" image="schedule.jpg" />
        <Works text="Pickup at your address" image="pickup.jpg" />
        <Works text="Receive Payment" image="payment.jpg" />
      </div>
      <div className="why">
        <h1 className="heading">Why Us?</h1>
        <div className="whyflex">
          <WhyUs
            heading="Best Rates"
            desc="We provide the best value for your scrap from our network of Recyclers."
            img="rates.jpg"
          />
          <WhyUs
            heading="Convenience"
            desc="We provide the best value for your scrap from our network of Recyclers."
            img="conv.jpg"
          />{" "}
          <WhyUs
            heading="Trust"
            desc="Doorstep pickup according to user's convenient date & time."
            img="trust.jpg"
          />{" "}
          <WhyUs
            heading="Eco-friendly"
            desc="We ensure responsible recycling of your scrap items."
            img="eco.jpg"
          />
        </div>
      </div>
      <Clients />
      <Footer />
    </div>
  );
}
