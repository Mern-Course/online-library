import Header from "../components/Header";
import "../Styling/accountpage.css";
import { React } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Account() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/users/me", {
      withCredentials: true,
    })
      .then((res) => {
        setEmail(res.data.data.email);
        setPhone(res.data.data.phone);
        setUsername(res.data.data.name);
        setId(res.data.data._id);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Header></Header>

      <div className="sidenavbox">
        <ul class="nav flex-column">
          <li class="nav-item linkbox">
            <a className="linkitem" href="/account">Account Details</a>
          </li>

          <li class="nav-item linkbox">
            <a className="linkitem" href="/changepswd">Change Password</a>
          </li>

          <li class="nav-item linkbox">
            <a className="linkitem" href="/booksonhold">Books on Hold</a>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="contentheading">
          <h2>Account Information</h2>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Username:</label>
          <p className="labelcontent">{username}</p>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Email-Id:</label>
          <p className="labelcontent">{email}</p>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">User Id:</label>
          <p className="labelcontent">{id}</p>
        </div>

        <div style={{ "display": "flex" }}>
          <label className="label">Ph.No:</label>
          <p className="labelcontent">{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
