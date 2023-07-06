
import './App.css';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Loginpage from './Pages/Loginpage';
import Popular from './Pages/Popular';
import Signuppage from './Pages/Signuppage';
import Singlebookinfo from './Pages/Singlebookinfo';
import Trending from './Pages/Trending';

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
           <Route path='/singlebookinfo' element={<Singlebookinfo/>} ></Route>
             <Route path='/account' element={<Account/>} ></Route>

         </Routes>
       </main>
      
     </Router>
    
    // <div>
      
    //   <Account></Account>
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