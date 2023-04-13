import React, { useState ,useCallback } from "react";
import SignUpInfo from "./signup.js";
import signUp from "../images/icon.jpg";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";
//import PersonalInfo from "./PersonalInfo";
//import OtherInfo from "./OtherInfo";
import image from "../images/login.jpg";
import axios from "axios";
import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";


function SignUp() {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  //const [page, setPage] = useState(0);
  const mystyle = {
    backgroundImage: `url(${image})`,
    height: '100vh',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no repeat',

  }
  //const FormTitles = ["Sign Up"];
  const handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password Doesn't Match with Confirm Password !!!");
    } else {
      alert("Account Created");
      navigate('log-in');

    }
    console.log("dedede");
    const user = {
      Username: formData.Username,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };
    
    // console.log({ user });
    axios
      .post("http://localhost:8000/api/auth/sign-up", formData)
      .then((res) => {
       console.log(res)
        setFormData({
          Username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        // alert("user created successfully");
        // console.log(res.formData.message);
        toast.success("Successfully SignedUp!", {
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.error("Error couldn't create user", {
          autoClose: 3000,
        });
        console.log("Error couldn't create user");
        // console.log(err.message);
      });


  }
  const navigate = useNavigate();
  const navigateToLogin = () => {

    navigate('/log-in');
  };
  const navigateToSignUp = () => {

    navigate('/sign-up');
  };
  const handleChange = useCallback((event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  });


  return (
    <div className="form" style={mystyle}>

      <div className="form-container">
        <div className="header">

        </div>
        <div className="body">
          <form type="submit" onSubmit={handleSubmit} className="sign-up-container">

            <div className="row">
              <div className="column">
                <button id="but2"
                  onClick={() => {
                    navigateToLogin();
                  }
                  }>Sign In</button>
              </div>
              <div className="column">
                <button id="but2"
                  onClick={() => {
                    navigateToSignUp();
                  }}
                >
                  Sign Up</button>
              </div>

            </div>

            <div className="header">
              <img src={signUp} className="image" ></img>
            </div>
            <div>
            <p className="ptag">
                <span className="over3">
                  <p className="icon4">
                    <FaUserAlt />
                  </p>
                  <input className="input4"
                    type="text"
                    name="Username"
                    placeholder="UserName"
                    value={formData.Username}
                    onChange={handleChange}
                    required
                  />
                </span>
              </p>
              <p className="ptag">
                <span className="over4" >
                  <p className="icon1">
                    <FaEnvelope />
                  </p>
                  <input
                    className="input1"
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </span>
              </p>
              <p className="ptag">
                <span className="over5">
                  <p className="icon2">
                    <FaLock />
                  </p>
                  <input
                    minLength="8"
                    className="input2"
                    type="password"
                    name="password"
                    placeholder="password..."
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </span>
              </p>

              <p className="ptag">
                <span className="over6">
                  <p className="icon3">
                    <FaLock />
                  </p>
                  <input className="input3"
                    minLength="8"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </span>
              </p>

            </div>
            <div className="footer">

              <button className="logbutton"
                type="submit" onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default SignUp;