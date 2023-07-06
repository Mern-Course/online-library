
function Loginpage()
{
    return(
        <div  className="loginpagebackground" style={{ 


            
            
          }} >


            <h1 className="loginheading">BOOkHive</h1>
            

            <div className="loginform-position" >
                
            <form className="loginformbox" >
            <h3 className="formboxheading" >Login</h3>
                    
                    <input className="forminput" type="text" placeholder="USERNAME" name="username" required/><br></br>
                    
                    <input className="forminput" type="password" placeholder="PASSWORD" name="password" required/><br></br>

                    <a href="#" className="forgotlink">FORGOT YOUR PASSWORD?</a> <br></br>
                    <a href="#" className="signuplink">NEED SIGNUP?</a>


                    <div  >
                    <button className="loginbtn formbtn" type="submit">LOGIN</button> 
                    {/* <button className="signupbtn formbtn " type="button" >SIGNUP</button>  */}
                    </div>

            </form>

            </div>           
           
        </div>
    );
}


export default Loginpage;