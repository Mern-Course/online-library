
import '../App.css';

function Signuppage()
{
    return(
        <div  className="loginpagebackground">

            <h1 className="loginheading">BOOkHive</h1>
            
            <div className="loginform-position" >
                
            <form className="signupformbox" >
            <h3 className="formboxheading" >SIGN-UP</h3>
                    
                    <input className="forminput" type="text" placeholder="USERNAME" name="username" required/><br></br>
                    
                    <input className="forminput" type="password" placeholder="PASSWORD" name="password" required/><br></br>

                    <input className="forminput" type="password" placeholder="CONFIRM PASSWORD" name="cnfmpassword" required/><br></br>

                    <input className="forminput" type="tel" placeholder="PH.NO" name="cnfmpassword" required/><br></br>

                    
                    <a href="#" className="alreadsignedup">SIGNED UP ALREAD?</a>


                    <div  >
                    <button className="loginbtn formbtn" type="submit">SIGN-UP</button> 
                    {/* <button className="signupbtn formbtn " type="button" >SIGNUP</button>  */}
                    </div>

            </form>

            </div>           
           
        </div>
    );
}


export default Signuppage;