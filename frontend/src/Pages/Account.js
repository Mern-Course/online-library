import Header from "../components/Header";
import '../Styling/accountpage.css';
import {React} from 'react';
import axios from "axios";
import { useEffect } from "react";

function Account()
{

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/users/me")
             .then((res) => {console.log(res)})
             .catch(err => {console.log(err)});
    }, )
    
    return(
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

            
            <div className="content" >

            <div className="contentheading"  >
                    <h2>Account Information</h2>
                </div>

                <div style={{"display" : "flex"}} >
                    <label className="label" >Username:</label><p className="labelcontent" >ABCDEF</p>
                </div>

                <div style={{"display" : "flex"}} >
                    <label className="label" >Email-Id:</label><p className="labelcontent" >ABC@gmail.com </p>
                </div>

                <div style={{"display" : "flex"}} >
                    <label className="label" >Ph.no:</label><p className="labelcontent" > 1234567890</p>
                </div>

            </div>


        </div>
    );
}

export default Account;