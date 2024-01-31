import React, { useContext, useState } from "react";
import myContext from "./Context";

export default function Addcard() {
  const { carddata, setCarddata, setData, Data } = useContext(myContext);

  const [errorcount, seterrorcount] = useState({});

  const handleChange = (field, value) => {
    setCarddata({ ...carddata, [field]: value });
  };
  const Updatedcardata = {
    id: parseInt(carddata.id),
    brand: carddata.brand.toUpperCase(),
    model: carddata.model,
    rate: parseInt(carddata.rate),
    stoke: parseInt(carddata.stoke),
    img: carddata.img,
    quantity: parseInt(carddata.quantity),
    description: carddata.description,
  };
  const handleClick = () => {
    const errors = validate(Updatedcardata);
    seterrorcount(errors);
    if (Object.keys(errors).length === 0) {
      setData([...Data, Updatedcardata]);
      setCarddata({
        id: "",
        brand: "",
        model: "",
        rate: "",
        stoke: "",
        img: "",
        quantity: "",
        description: "",
      });
    }
    alert("Successfully added...");
  };
  const validate = (crd) => {
    const error = {};
    if (!crd.id) {
      error.ids = "id  required...";
    }
    if (!crd.brand) {
      error.brand = "brand name required...";
    }
    if (!crd.model) {
      error.model = "model name required...";
    }
    if (!crd.rate) {
      error.rate = "rate required...";
    }
    if (!crd.stoke) {
      error.stoke = "stock count required...";
    }
    if (!crd.img) {
      error.img = "img url required...";
    }
    if (!crd.quantity) {
      error.quantity = "Initial quantity is required";
    }
    if (!crd.description) {
      error.description = "description required...";
    }
    return error;
  };

  return (
    <div>
      <div className="form-container">
        <div className="form-container-sub">
          <div className="form-div">
            <p className="form-title">🅰🅳🅳 🅿🆁🅾🅳🆄🅲🆃</p>
            <div className="inputonly-container">
              <input
                value={carddata.id}
                placeholder="Id.."
                type="number"
                className="input"
                onChange={(e) => handleChange("id", e.target.value)}
              />
              <p className="caution">{errorcount.ids}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.quantity}
                placeholder="Initial quantity.."
                type="number"
                className="input"
                onChange={(e) => handleChange("quantity", e.target.value)}
              />
              <p className="caution">{errorcount.quantity}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.brand}
                placeholder="Brand.."
                className="input"
                onChange={(e) => handleChange("brand", e.target.value)}
              />
              <p className="caution">{errorcount.brand}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.model}
                placeholder="Model..."
                className="input"
                onChange={(e) => handleChange("model", e.target.value)}
              />
              <p className="caution">{errorcount.model}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.rate}
                placeholder="Rate..."
                className="input"
                onChange={(e) => handleChange("rate", e.target.value)}
              />
              <p className="caution">{errorcount.rate}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.stoke}
                placeholder="Stoke..."
                className="input"
                onChange={(e) => handleChange("stoke", e.target.value)}
              />
              <p className="caution">{errorcount.stoke}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.img}
                placeholder="Image url.."
                className="input"
                onChange={(e) => handleChange("img", e.target.value)}
              />
              <p className="caution">{errorcount.img}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={carddata.description}
                placeholder="Description..."
                className="input"
                onChange={(e) => handleChange("description", e.target.value)}
              />
              <p className="caution">{errorcount.description}</p>
            </div>

            <button className="frm-btn" onClick={() => handleClick()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
