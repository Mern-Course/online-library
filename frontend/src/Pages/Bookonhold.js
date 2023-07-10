
import {React} from 'react';
import Header from '../components/Header';

function Bookonhold(){
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

        </div>
        
    )
}

export default Bookonhold;