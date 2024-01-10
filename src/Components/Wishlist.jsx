import React from 'react'
import '../Styles/Cart.css'
import myContext from './Context'
import { useContext } from 'react'
import Image from 'react-bootstrap/Image';
import like from '../Pictures/likes.png'
import { Link } from 'react-router-dom';
import unlike from '../Pictures/unlike.png'
export default function Cart() {
  const {Wishlist,setWishlist,loginstats,setLoginstats} = useContext(myContext)
  const HandleClick = (data) =>{
    if(Wishlist.includes(data))
    {
      setWishlist(Wishlist.filter((element)=>{return(element !== data)}))
    }
    else{
      setWishlist([...Wishlist,data])
    }
  }
  if(Wishlist.length === 0 && loginstats===false)
  {
    return (
      <div className='empty-container'>
        <div className='grplink'>
      <label className='emp'>----Wishlist Empty----</label><br></br>
     <Link className='emplink' to="/login">Login</Link>
     </div>
      </div>
    )
  }
  else if(Wishlist.length === 0 && loginstats===true)
  {
    return (
      <div className='empty-container'>
        <div className='grplink'>
      <label className='emp'>----Wishlist Empty----</label><br></br>
  
     </div>
      </div>
    )

  }
  else{
    return (
      <div className='filter-container'>
      <div className='card-container'>
        {Wishlist.map((item,index)=>(
        
       <div key={index}>
          <Link to={`/productdetails/${item.id}`} className='div-link' >
        <div className='card'>
         <div><Image src={item.img} className='crd-img' thumbnail width="220px" /><button className='like-btn' onClick={(e)=>{HandleClick(item);e.preventDefault()}}>{Wishlist.includes(item) ? <img src={like} className='like-state-img' height="30px" width="30px"/>:<img src={unlike}  height="30px" width="30px"/>}</button></div>
         <div className='crd-brand'><mark>{item.brand}</mark></div>
         <div className='crd-stoke'>Stoke - <kbd>{item.stoke}</kbd></div>
         <div className='crd-model'>{item.model}</div>
         <div className='crd-rate'>INR {item.rate}</div>
         
         
         </div>
         </Link>
       </div>
        ))}
        
      </div>
      </div>
    )
  }
 
}
