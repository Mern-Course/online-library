
import './App.css';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import Popular from './Pages/Popular';
import Signuppage from './Pages/Signuppage';
import Singlebookinfo from './Pages/Singlebookinfo';
import Trending from './Pages/Trending';
import Changepswd from './Pages/Changepswd';
import Bookonhold from './Pages/Bookonhold';

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from './components/Header';


function App() {


  return (

    <Router>

    <main>
         <Routes>

           <Route path='/' element={<Loginpage/>} ></Route>
           <Route path='/home' element={<Home/>} ></Route>
           <Route path='/home/trending' element={<Trending/>} ></Route>
           <Route path='/home/popular' element={<Popular/>} ></Route>
           <Route path='/singlebookinfo/:id' element={<Singlebookinfo/>} ></Route>
           <Route path='/account' element={<Account/>} ></Route>
           <Route path='/signup' element={<Signuppage/>} ></Route>
           <Route path='/changepswd' element={<Changepswd/>} ></Route>
           <Route path='/booksonhold' element={<Bookonhold/>} ></Route>

         </Routes>
       </main>
      
    </Router>
    
    // <div>
      
    //   <Signuppage></Signuppage>
    // </div>



    // <div className="App" >




    
      
    //   {/* <Home></Home>  */}
    //   {/* <Loginpage ></Loginpage> */}
    //   {/* <Signuppage></Signuppage> */}
    //   {/* <Singlebookinfo></Singlebookinfo> */}

    //   <Trending></Trending>

    //   {/* <Popular></Popular> */}

    // </div>
  );
}

export default App;