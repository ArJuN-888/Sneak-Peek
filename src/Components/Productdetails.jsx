import React, { useState, useEffect } from 'react';
import myContext from './Context';
import { useContext } from 'react';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import '../Styles/Productdetails.css';
import like from '../Pictures/likes.png';
import unlike from '../Pictures/unlike.png';
import { useNavigate } from 'react-router-dom';

export default function Productdetails() {
  const {
    Data,
    Wishlist,
    setWishlist,
    loginstats,
    cart,
    setCart,
  } = useContext(myContext);
  const [incart, setIncart] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
console.log("productdetailspage",cart)
  useEffect(() => {
    const cardexist = cart.some((element) => element.id === parseInt(id));
    setIncart(cardexist);
  }, [cart, id]);

  const HandleClick = (data) => {
    if (Wishlist.includes(data)) {
      setWishlist(Wishlist.filter((element) => element !== data));
    } else if (loginstats === true) {
      setWishlist([...Wishlist, data]);
    } else {
      navigate('/Login');
    }
  };

  const handleCart = (datas, dt) => {
    if (incart) {
      navigate('/cart');
    } else if (loginstats === true) {
      setCart([...cart, dt]);
      setIncart(true);
    } else {
      navigate('/login');
    }
  };


const Buynow = ()=>{
  if(loginstats===true)
  {
    navigate("/")
  }
  else{
    navigate("/login")
  }
}

  // Convert the id to the appropriate type if needed
  // const itemId = parseInt(id);
console.log("type of id",typeof id)
const newid = parseInt(id)
console.log("type of id",typeof newid)
  // Filter the data based on the converted id
  const cardfilter = Data.filter((element) => parseInt(element.id) === newid );
  const item = cardfilter[0]; // Access the first (and only) item in the filtered array

  return (
    <div className="product-card-holder">
      <div>
        <div className="product-card">
          <div className="prd-img-container">
            <Image
              src={item.img}
           roundedCircle
              className="product-img"
              width="320px"
              alt=''
            />
            <button
              className="prd-like-btn"
              onClick={() => {
                HandleClick(item);
              }}
            >
              {Wishlist.includes(item) ? (
                <img
                  src={like}
                  className="like-state-img"
                  height="40px"
                  width="40px"
                  alt=''
                />
              ) : (
                <img src={unlike} height="40px" width="40px" alt=''/>
              )}
            </button>

            <div className="prd-btn-container">
              <button
                className="prd-btn"
                onClick={() => {
                  handleCart(item.id, item);
                }}
              >
                {incart ? 'Go to cart' : 'Add to cart'}
              </button>
              <button onClick={()=>{Buynow()}}  className="prdbuy-btn">Buy now</button>
            </div>
          </div>
          <div className="prd-data-container">
            <div className="prd-brand">
              <mark>{item.brand}</mark>
            </div>
            <div className="prd-rate">INR {item.rate}</div>
            <div className="prd-model">{item.model}</div>
            <div className="prd-description">{item.description}</div>
            <div className="prd-stoke">
              Stoke-left- <kbd>{item.stoke}</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
