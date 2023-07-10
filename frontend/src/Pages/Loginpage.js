
import { redirect } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loginpage()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function updateemail(event)
    {
        setEmail(event.target.value);
    }
    function updatepass(event)
    {
        setPassword(event.target.value);
    }


    const navigate = useNavigate();

    function postdata(event)
    {
        event.preventDefault();
        const user = { email: email, password: password }

        axios.post("http://localhost:5000/api/v1/users/login", user ,{ withCredentials: true })
                .then((res) => { navigate('/home') ;console.log(res.data)})
                .catch(err => console.log(err));
    }


    return(
        <div  className="loginpagebackground" >

            <h1 className="loginheading">BOOkHive</h1>
            
            <div className="loginform-position" >
                
            <form className="loginformbox" onSubmit={postdata} >
            <h3 className="formboxheading" >Login</h3>
                    
                    <input value={email} onChange={updateemail} className="forminput" type="text" placeholder="EMAIL" name="email" /><br></br>
                    
                    <input value={password} onChange={updatepass} className="forminput" type="password" placeholder="PASSWORD" name="password" /><br></br>

                    <a href="#" className="forgotlink">FORGOT YOUR PASSWORD?</a> <br></br>
                    <a href="/signup" className="signuplink">NEED SIGNUP?</a>

                    <div  >
                    <button className="loginbtn formbtn" type="submit">LOGIN</button> 
                    
                    </div>

            </form>

            </div>           
           
        </div>
    );
}


export default Loginpage;