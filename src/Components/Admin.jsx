import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
  const [adminemailinput, setadminemailinput] = useState("");
  const [adminpassinput, setadminpassInput] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  const navigate = useNavigate();

  const [errorcount, seterrorcount] = useState({});

  const handleadminInput = () => {
    const admindataErrors = adminvalidation(adminemailinput, adminpassinput);
    seterrorcount(admindataErrors);
    if (Object.keys(admindataErrors).length === 0) {
      navigate("/admindashboard");
      setadminemailinput("");
      setadminpassInput("");
    }
  };
  const adminvalidation = (adminemail, adminpassword) => {
    const error = {};
    if (!adminemail) {
      error.adminemail = "Email is required...";
    } else if (adminemail !== "arjun@gmail.com") {
      error.adminemail = "Invalid Email...";
    }
    if (!adminpassword) {
      error.adminpassword = "Password is required...";
    } else if (adminpassword !== "arjun@123") {
      error.adminpassword = "Invalid Password...";
    }
    return error;
  };

  return (
    <div className="admin-main">
      <div className="form-container">
        <div className="form-container-sub">
          <div className="form-div">
            <p className="form-title">🅰🅳🅼🅸🅽-🅻🅾🅶🅸🅽</p>
            <div className="inputonly-container">
              <input
                value={adminemailinput}
                className="input"
                placeholder="Email..."
                onChange={(e) => {
                  setadminemailinput(e.target.value);
                }}
              />
              <p className="caution">{errorcount.adminemail}</p>
            </div>
            <div className="inputonly-container">
              <input
                value={adminpassinput}
                className="input"
                type={showpassword ? "text" : "password"}
                placeholder="Password..."
                onChange={(e) => {
                  setadminpassInput(e.target.value);
                }}
              />
              <p className="caution">{errorcount.adminpassword}</p>
            </div>
            <div className="show-container">
              {" "}
              <input
                type="checkbox"
                className="check "
                onClick={() => setshowpassword(!showpassword)}
              />
              <label className="show-label">Show Password</label>
            </div>
            {/* <Link to="/Cardadd">Card</Link> */}
            <button
              className="frm-btn"
              onClick={() => {
                handleadminInput();
              }}
            >
              login
            </button>
            <div className="Admin-btm-label">
              <label className="brand me-3 ms-3">
                <span className="spn1">S</span>
                <span className="spn2">n</span>
                <span className="spn3">e</span>
                <span className="spn4">a</span>
                <span className="spn5">k</span>
                <span className="spn6">-</span>
                <span className="spn7">P</span>
                <span className="spn8">e</span>
                <span className="spn9">e</span>
                <span className="spn10">k</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div> //adminmaindiv
  );
}
