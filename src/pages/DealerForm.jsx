import React from "react";
import "./dealercss.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function DealerForm() {
  const history = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5173/dealerreg", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already registered!");
          } else if (res.data == "notexist") {
            history("/dealerhome", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="dcontainer">
      <h2>Scrap Dealer Registration</h2>
      <form id="dealerform" action="POST">
        <label htmlFor="businessName">Business Name:</label>
        <input type="text" id="businessName" name="businessName" />

        <label htmlFor="contactPerson">Contact Person:</label>
        <input type="text" id="contactPerson" name="contactPerson" />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" />

        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" name="image" />
        <br />
        <br />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address"></textarea>

        <label htmlFor="city">Location:</label>
        <input type="text" id="city" name="city" />
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
        {/* Add more checkbox options for different scrap types */}

        <label htmlFor="paymentMethods">Preferred Payment Methods:</label>
        <input type="checkbox" id="cash" name="paymentMethods[]" value="Cash" />
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
        {/* Add more checkbox options for different payment methods */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
