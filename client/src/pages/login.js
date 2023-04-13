import React, { useState , useEffect } from "react";
import IMG from "../images/login.jpg";
import LOGIN from "../images/icon.jpg";
import LoginInfo from "./signIn";
import {useNavigate} from "react-router-dom"
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  //const [Loginpage, setLPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  });
  const mystyle={
    backgroundImage:`url(${IMG})`,
      height:'100vh',
      fontSize:'50px',
      backgroundSize:'cover',
      backgroundRepeat:'no repeat',

  }
  const navigate = useNavigate();

  const navigateToLogin = () => {
    
    navigate('/log-in');
  };
  const navigateToSignUp = () => {
    
    navigate('/sign-up');
  };
 /* const handleSubmit = (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    if (!formData.email) {
      alert("invalid email");
    } else {
      alert("logged in");
      navigate('/about')
      
    }
  }*/
  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/log-in",
        formData
      );
      if (response) {
        toast.success("Successfully LoggedIn!", {
          autoClose: 3000,
        });
        
      }
      navigate("/");
    } catch (error) {
      toast.error("Can't LoggedIn!", {
        autoClose: 3000,
      });
      navigate("/form");
    }
  };
 
  return (
    <div className="form" style={mystyle}>
     
      <div className="form-container1">
        <div className="header">
          
        </div>
        <div className="body">
          <form type="submit" onSubmit={login} className="sign-up-container">

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
<img src={LOGIN} className="image" ></img>
</div>
<div>

<p className="ptag">
    <div className="over1" >
    <p className="icon-5">
      <FaEnvelope />
    </p>
    <input
      className="input1"
      type="email"
      name="email"
      placeholder="email"
      value={formData.email}
      
      onChange={
        (event) => {
          setFormData({ ...formData, email: event.target.value })
        }
      }
      required
    />

  </div>
</p>
<p className="ptag">
  <div className="over2">
    <p className="icon-6">
      <FaLock />
    </p>
    <input
      minLength="8"
      className="input2"
      type="password"
      name="password"
      placeholder="password..."
      value={formData.password}
      
      onChange={
        (event) =>
          setFormData({ ...formData, password: event.target.value })

      }
      required
    />
  </div>
</p>



</div>
<div className="footer">

<button className="logbutton"
  type="submit" onClick={login}
>
  Login
</button>
</div>

</form>
</div>

</div>
</div>
);
}

export default LoginForm;