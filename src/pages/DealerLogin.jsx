import React, { useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./dealercss.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function DealerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredentials) => {
        console.log(useCredentials);
        history("/dealerhome");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Invalid email or password. Please try again.");
      });
  };
  return (
    <div>
      <Navbar />
      <div className="dcontainer">
        <h2>Scrap Dealer Login</h2>
        <form id="dealerform">
          <label>Email:</label>
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
          <center>
            <input type="submit" onClick={signIn} />
          </center>
        </form>
      </div>
      <Footer />
    </div>
  );
}
