import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./dealercss.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import firebase from "firebase/compat/app";
import "firebase/database";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function DealerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [contactPerson, setContactPerson] = useState("");

  const history = useNavigate();

  const signUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        const { uid } = useCredentials.user;

        const dealerData = {
          businessName: businessName,
          city: city,
          email: email,
          contactNumber: contactNumber,
          city: city,
          contactPerson: contactPerson,
        };

        const db = getDatabase();
        set(ref(db, `dealers/${uid}`), dealerData)
          .then(() => {
            // console.log("Dealer data stored successfully!");
            // alert("User created successfully!");
            history("/successdealer");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar />
      <div className="dcontainer">
        <h2>Scrap Dealer Registration</h2>
        <form id="dealerform" action="POST">
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <label htmlFor="contactPerson">Contact Person:</label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" name="image" />
          <br />
          <br />

          <label>Buissness Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address"></textarea>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="scrapTypes">Types of Scrap:</label>
          <input
            type="checkbox"
            id="ferrous"
            name="scrapTypes[]"
            value="Ferrous Metals"
          />
          <label htmlFor="ferrous">Ferrous Metals</label>
          <input
            type="checkbox"
            id="nonFerrous"
            name="scrapTypes[]"
            value="Non-Ferrous Metals"
          />
          <label htmlFor="nonFerrous">Non-Ferrous Metals</label>
          <br />
          <br />

          <label htmlFor="paymentMethods">Preferred Payment Methods:</label>
          <input
            type="checkbox"
            id="cash"
            name="paymentMethods[]"
            value="Cash"
          />
          <label htmlFor="cash">Cash</label>
          <input
            type="checkbox"
            id="bankTransfer"
            name="paymentMethods[]"
            value="Bank Transfer"
          />
          <label htmlFor="bankTransfer">Bank Transfer</label>
          <br />
          <br />

          <center>
            <input type="submit" onClick={signUp} />
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
}
