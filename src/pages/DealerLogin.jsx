import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./dealercss.css";
import { useNavigate, Link } from "react-router-dom";

export default function DealerLogin() {
  const history = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5173/dealerlogin", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/dealerhome", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("Invalid Credentials");
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
    <div>
      <Navbar />
      <div className="dcontainer">
        <h2>Scrap Dealer Login</h2>
        <form id="dealerform" action="POST"></form>

        <label htmlFor="dealeruser">Email:</label>
        <input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="dealerpass">Password:</label>
        <input
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input type="submit" value="Submit" onClick={submit} />
        <br />
        <br />
        <p>
          <center>---OR---</center>
        </p>
        <br />
        <Link to="/dealerreg">
          <center> Register as Dealer </center>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
