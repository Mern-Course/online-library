
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

function Signuppage()
{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfmpassword, setCnfmpassword] = useState("");
    const [name , setName] = useState("");
    const [phone , setPhone] = useState("");
    const [alertmsg, setAlert] = useState("");



    function updateemail(event)
    {
        setEmail(event.target.value);
    }
    function updatepass(event)
    {
        setPassword(event.target.value);
    }
    function updatecnfmpass(event)
    {
        setCnfmpassword(event.target.value);
    }
    function updatename(event)
    {
        setName(event.target.value);
    }
    function updateph(event)
    {
        setPhone(event.target.value);
    }


    function postdata(event)
    {
        event.preventDefault();
        const user = { name: name, email: email, password: password, confirmPassword: cnfmpassword, phone: phone };
        console.log(user)

        axios.post("http://localhost:5000/api/v1/users/register", user, { withCredentials: true })
                .then((res) => {console.log(res.data) ; setAlert("User Registered") }).catch((err) => {setAlert(err.response.data.message); console.log(err) });
        setCnfmpassword("")
        setEmail("")
        setName("")
        setPassword("")
        setPhone("")
    }

    return(
        <div  className="loginpagebackground">

            <h1 className="loginheading">BOOkHive</h1>
            
            <div className="loginform-position" >
                
            <form className="signupformbox" onSubmit={postdata} >
            <h3 className="formboxheading" >SIGN-UP</h3>
                    
                    <input value={name} onChange={updatename} className="forminput" type="text" placeholder="USERNAME" name="name" /><br></br>

                    <input value={email} onChange={updateemail} className="forminput" type="text" placeholder="EMAIL" name="email" /><br></br>
                    
                    <input value={password} onChange={updatepass} className="forminput" type="password" placeholder="PASSWORD" name="password" /><br></br>

                    <input value={cnfmpassword} onChange={updatecnfmpass} className="forminput" type="password" placeholder="CONFIRM PASSWORD" name="cnfmpassword" /><br></br>

                    <input value={phone} onChange={updateph} className="forminput" type="text" placeholder="Ph.No" name="phone" /><br></br>
                    
                    <a href="/" className="alreadsignedup">SIGNED UP ALREADY?</a>

                    <div  >
                    <button className="loginbtn formbtn" type="submit">SIGN-UP</button> 
                    </div>

                    <h6 style={{"color" : "red", "textAlign" : "center"}} >{alertmsg}</h6>

            </form>

            </div>           
           
        </div>
    );
}


export default Signuppage;