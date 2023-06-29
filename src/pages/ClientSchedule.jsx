import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off, push } from "firebase/database";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./dealercss.css";
import { useNavigate } from "react-router-dom";

export default function ClientSchedule() {
  const [cname, setCname] = useState("");
  const [cphone, setCphone] = useState("");
  const [caddress, setCaddress] = useState("");
  const [cdealer, setCdealer] = useState("");
  const [cscrap, setCscrap] = useState("");
  const [cweight, setCweight] = useState("");
  const [ctime, setCtime] = useState("");
  const [dealerList, setDealerList] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    // Fetch the list of registered dealers from the "dealers" database
    const database = getDatabase();
    const dealersRef = ref(database, "dealers");
    const dealersListener = onValue(dealersRef, (snapshot) => {
      const dealers = snapshot.val();
      const dealerArray = dealers ? Object.values(dealers) : [];
      setDealerList(dealerArray);
    });

    return () => {
      // Clean up the listener when the component unmounts
      off(dealersRef, "value", dealersListener);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // Create an object with the form data
    const pickupRequest = {
      cname: cname,
      cphone: cphone,
      caddress: caddress,
      cdealer: cdealer,
      cscrap: cscrap,
      cweight: cweight,
      ctime: ctime,
    };

    // Store the pickup request in the "pickup requests" database
    const database = getDatabase();
    const pickupRequestsRef = ref(database, "pickup requests");
    push(pickupRequestsRef, pickupRequest)
      .then(() => {
        // Success: Clear the form fields
        setCname("");
        setCphone("");
        setCaddress("");
        setCdealer("");
        setCscrap("");
        setCweight("");
        //alert("Pickup request submitted successfully!");
        history("/successschedule");
      })
      .catch((error) => {
        // Error handling
        console.log(error);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="dcontainer">
        <h2>Schedule Pickup</h2>
        <form>
          <label>Customer Name:</label>
          <input
            type="text"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
          />
          <label>Phone Number:</label>
          <input
            type="number"
            value={cphone}
            onChange={(e) => setCphone(e.target.value)}
          />
          <br />
          <label>Address:</label>
          <textarea
            value={caddress}
            onChange={(e) => setCaddress(e.target.value)}
          />

          <label htmlFor="dealer">Dealer:</label>
          <select
            value={cdealer}
            onChange={(e) => setCdealer(e.target.value)}
            required
          >
            <option value="">Select a dealer</option>
            {dealerList.map((dealer) => (
              <option key={dealer.id} value={dealer.businessName}>
                {dealer.businessName}
              </option>
            ))}
          </select>

          <label>Scrap Type:</label>
          <input
            type="text"
            value={cscrap}
            onChange={(e) => setCscrap(e.target.value)}
          />
          <label>Select time slot:</label>
          <input
            type="time"
            value={ctime}
            onChange={(e) => setCtime(e.target.value)}
          />
          <label>Estimated Weight:</label>
          <input
            type="number"
            value={cweight}
            onChange={(e) => setCweight(e.target.value)}
          />

          <center>
            <input type="submit" onClick={handleSubmit} />
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
}
