import { useState,useEffect } from 'react';
import './App.css';
import myContext from './Components/Context';
import { proData } from './Components/Json';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Wish from './Components/Wishlist';
import Adidas from './Components/Adidas';
import Search from './Components/Search';
import Bata from './Components/Bata';
import Nike from './Components/Nike';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Productdetails from './Components/Productdetails';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import Userprofile from './Components/Userprofile'
import AdminDashboard from './Components/AdminDashboard';
import Usermanagement from './Components/Usermanagement';
import Editcard from './Components/Editcard';
import Addcard from './Components/Addcard';

function App() {
  const [Data,setData] = useState(proData)
  const [cart,setCart] = useState([])

  const [Wishlist,setWishlist] = useState([])
const [Ban,setBan] = useState([])
  const [userdata,setUserdata] = useState([])
  const [searchresult,setSearchresult] = useState([])
  const [loginstats,setLoginstats] =useState(false)
  const [carddata,setCarddata] = useState({
    id:"",
    brand:"",
    model:"",
    rate:"",
    stoke:"",
    img:"",
    quantity:"",
    description:""
})
  const [signupdata,setSignupdata] = useState({username:"",email:"",password:""})
  const [count,setCount] = useState(1)
  const [total,setTotal] = useState(null)

  const [loginUserprof,setloginuserProf] = useState({})
  console.log("mainarray",Data)
  console.log("Cartorg",cart)
 console.log("ban",Ban)


  const method = {
    Data,setData,
    searchresult,setSearchresult,
    cart,setCart,
    userdata,setUserdata,
    loginstats,setLoginstats,
    carddata,setCarddata,
    Wishlist,setWishlist,
    count,setCount,
    total,setTotal,
    signupdata,setSignupdata,
    loginUserprof,setloginuserProf,
    Ban,setBan

   
    

   
    
  }
  return (
    <>
    
     <BrowserRouter>
       <myContext.Provider value={method}>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Usermanagement" element={<Usermanagement/>}></Route>
          <Route path="/Admindashboard" element={<AdminDashboard/>}></Route>
          <Route path="/Editcard" element={<Editcard/>}></Route>
          <Route path="/Addcard" element={<Addcard/>}></Route>
          <Route path="/Userprofile" element={<Userprofile/>}></Route>
          <Route path="/productdetails/:id" element={<Productdetails/>}></Route>
          <Route path="/Adidas" element={<Adidas/>}></Route>
          <Route path="/Bata" element={<Bata/>}></Route>
          <Route path="/Nike" element={<Nike/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Search" element={<Search/>}></Route>
          <Route path="/Wishlist" element={<Wish/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
        </myContext.Provider>
     </BrowserRouter>
    </>
  );
}

export default App;
