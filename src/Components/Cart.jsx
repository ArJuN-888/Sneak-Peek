import React, { useState, useEffect } from "react";
import myContext from "./Context";
import like from "../Pictures/likes.png";
import unlike from "../Pictures/unlike.png";
import { Image } from "react-bootstrap";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Cart.css";
export default function Cart() {
  const {cart,setCart,loginstats,setLoginstats} = useContext(myContext)
 
  console.log("CART",cart)
  
  // const navigate =useNavigate()

  const cartDelete =(cardid)=>{
 
    setCart(cart.filter((element)=>{return(element.id !== cardid)}))


  }

 
  const addQuantity = (itemid)=>{
   const updatedCart = cart.map((element)=>{
    if(element.id === itemid && element.quantity <element.stoke)
    {
      return{...element,quantity:element.quantity+1}
    }
    return(element)
   })
  setCart(updatedCart)
  }
  const subQuantity = (itemid)=>{
    const updatedCart = cart.map((element) => {
      if (element.id === itemid) {
        const updatedQuantity = element.quantity - 1;
        return {
          ...element,
          quantity: updatedQuantity >= 1 ? updatedQuantity : 1
        };
      }
      return element;
    });
    setCart(updatedCart);
  }
  
  const calculateTotalPrice = ()=>{
    let totalcost = 0;
    cart.forEach(element => {
         totalcost += element.quantity * element.rate
    });
    return totalcost
  }
  if(cart.length===0 && loginstats===false)
  {

    return (
      <div className='empty-container'>
        <div className='grplink'>
      <label className='emp'>----Cart Empty----</label><br></br>
     <Link className='emplink' to="/login">Login</Link>
     </div>
      </div>
    )
  }
  else if(cart.length===0 && loginstats===true)
  {
    return (
      <div className='empty-container'>
        <div className='grplink'>
      <label className='emp'>----Cart Empty----</label><br></br>
     </div>
      </div>
    )

  }
  else{
    return(
      <>
      <div className='cart-container'>
           
           {cart.map((item,index)=>{
             const totalItemPrice = item.rate * item.quantity;
           return(
          <div key={index}>
     
           <div className='carthold'>
           <Link to={`/productdetails/${item.id}`} className='llink' >
            <div className='image-container'><Image src={item.img}  className='crd-img' thumbnail width="220px" /></div>
            <div className='crd-brand col-sm-12'><mark>{item.brand}</mark></div>
            <div className='crd-stoke col-sm-12'>Stoke-left - <kbd>{item.stoke}</kbd></div>
            <div className='crd-model col-sm-12'>{item.model}</div>
            <div className='crd-rate col-sm-12'>INR {totalItemPrice}</div>
            <div className="countop">
            <button className="countbtn" onClick={(e)=>{addQuantity(item.id);e.preventDefault()}} >+</button>
            <label className="quantity">{item.quantity}</label>
            <button className="countbtn" onClick={(e)=>{subQuantity(item.id);e.preventDefault()}} >-</button>
            </div>
          
         <div className="deletecontain"><div className="cartdelete" onClick={(e)=>{cartDelete(item.id);e.preventDefault()}}>Remove</div></div>
         </Link>
            </div>
          
          
          </div>
          
           )
      
            })}
                       
         </div>
         <div className="total-price">Total Cart Price:  <label className="ttl">INR {calculateTotalPrice()}</label></div>
         </>
      )

  }


}
