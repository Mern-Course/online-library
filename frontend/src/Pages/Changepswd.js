
import '../Styling/accountpage.css';
import Header from '../components/Header';

import { useState } from 'react';


function Changepswd()
{
    const [changed, setChanged] = useState(false)


    function display(event)
    {
        setChanged(true);
        event.preventDefault();
    }
    
    return(


        <div style={{"display" : "flex"}} >
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

            <div className='chagepswform' >
                <form>
                    <h2>Change Password:</h2>
                    <input className='changeinput'  type='password' placeholder='Current Password' ></input>
                    <input className='changeinput' type='password' placeholder='New Password' ></input>
                    <a><button className='changesubmitbtn' onClick={display} >Submit</button></a>

                    {changed && <h5 style={{"margin-left" : "480px" , "margin-top" : "50px"}} >Password Changed</h5> }
                </form>
            </div>
            
            

        </div>

        
    );
}


export default Changepswd;
