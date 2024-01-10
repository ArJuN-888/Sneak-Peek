import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Styles/Navbar.css';
import sea from '../Pictures/search.png';
import { Link } from 'react-router-dom';
import car from '../Pictures/cart8.png';
import homebtn from '../Pictures/homeopac.png'
import { useState,useEffect,useRef } from 'react';
import myContext from './Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Wishlist from '../Pictures/wishlist.png'
import admin from '../Pictures/login1.png'
import logout from '../Pictures/logout.png'
import login from '../Pictures/login3.png'
export default function OffcanvasNavbar() {  
  const {Data,searchresult,setSearchresult,loginstats,setLoginstats,setloginuserProf, setWishlist,setCart} = useContext(myContext)
  console.log("srchresultarray",searchresult)
  const [search,setSearch] = useState("")
  const navigate = useNavigate()
  const refer = useRef()
  useEffect(()=>{
  
    // refer.current.focus()
  })
  const HandleSearch = () =>{
    
    
     const searchFilter = Data.filter((element)=>{
      if(search.toLowerCase().includes("all"))
      {
        return(element)
      }
      else if(search === "")
      {
        
        return("")
      }
      return(element.brand.toLowerCase().includes(search.toLowerCase()))})
     
console.log("searchfilter",searchFilter)
   setSearchresult(searchFilter)
   setSearch("")
   navigate("/Search")
  }
   const handleState =() =>{
    if(loginstats=== true)
    {
      setCart([])
      setWishlist([])
      setLoginstats(false)
      setloginuserProf({})
      navigate("/")
      alert("Successfully logged out")
    }
    else{
      
      navigate("/Login")
    }
  }
//  const Admin = () =>{
//   if(adminloginstats===true)
//   {
//     setadminLoginstats(false)
//     navigate('/')
//   }
//   else{
    
//    navigate("/Admin")
//   }
  
//  }
 const Adminnav = ()=>{
  navigate("/Admin") 
 }
    
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="   mb-3 position-fixed fixed-top Nav">
          <Container fluid>
            <div className='brand-container'>
            <label className='brand me-3 ms-3'>
              <span className='spn1'>S</span>
              <span className='spn2'>n</span>
              <span className='spn3'>e</span>
              <span className='spn4'>a</span>
              <span className='spn5'>k</span>
              <span className='spn6'>-</span>
              <span className='spn7'>P</span>
              <span className='spn8'>e</span>
              <span className='spn9'>e</span>
              <span className='spn10'>k</span>
            </label>
            </div>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`}className='nav-toggle-btn' />
        
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
         
           
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='brand' id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Sneak-Peek
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body className=''>
                <div className="form-main flex-grow-1   search">
                  <input
                    type="search"
                    ref={refer}
                    placeholder="Search by brands...."
                    className="me-2 form-field"
                    value={search}
                    onChange={(e)=> setSearch(e.target.value)}
                  />
            
                  <button className='form-btn me-4 '  onClick={()=>{HandleSearch()}}><img className='srch-glass' alt='' src={sea} width="38px" /></button>
          
               </div>
      
                <Nav className="pe-3 nav-item">
                  <div className='group2 me-4'>
                  <Link className='links'  to="/">
                    <img className='img-links' src={homebtn} alt='' width="35px" />
                  </Link>
                  <Link className='links'  to="/Wishlist">
                    <img className='img-links' src={Wishlist} alt='' width="35px" />
                  </Link>
                  <Link className='links'  to="/Cart">
                  <img className='img-links' src={car} alt='' width="35px" />
                  </Link>
                  </div>
                  
                  <div className='group1 me-2'>
                  <button className='admin-stat '  onClick={()=>{Adminnav()}}><img src={admin} alt='' width="35px"/></button>
                
                  </div>
                  <div className='group'>
                    <div className='group-sub'>
                  <button className='log-stat-btn' onClick={()=>{handleState()}}>{loginstats ? <img src={logout} width="32px" alt=''/>:<img src={login} width="32px" alt=''/>}</button>
                  <Link className='profile me-3' to="/userprofile">profile</Link>
                 
                  </div>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
   
          </Container>
    
        </Navbar>
      ))}
    
    </>
  );
}
