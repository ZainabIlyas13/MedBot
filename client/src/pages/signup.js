import React from "react";
import signUp from "../images/icon.jpg";
import './sign.css';
import { useNavigate } from "react-router-dom";
//import FontAwesomeIcon from "font-awesome-icons";
import { FaEnvelope, FaLock,FaUserAlt } from "react-icons/fa";

function SignUpInfo({ formData, setFormData }) {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    
    navigate('/log-in');
  };
  const navigateToSignUp = () => {
    
    navigate('/sign-up');
  };
  return (
    <div >   
      <div className="sign-up-container">
       <div className="row">
           <div className="column">
                  <button id="but2" onClick={()=>{
                    navigateToLogin();
                   }
                   }>Sign In</button>
           </div>
           <div className="column">
            <button id="but2"
            onClick={()=>{
              navigateToSignUp();
             }}>Sign Up</button>
        </div>
        </div>
      
        <div className="header">
         <img  src= {signUp} className="image" ></img>
        </div>
        <p className="ptag">
        <span>
        <label className="icon4">
          <FaUserAlt/>
        </label>
        </span>
          <input  className="input4"
          type="text"
          placeholder="Enter Your Name"
          value={formData.confirmPassword}
          onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })}
        
        />
        </p>
    
        <p className="ptag">
        <span >
         <p className="icon1">
         <FaEnvelope/>
         </p>  
            
        <input
        className="input1"
        type="text"
        placeholder="Enter your Email Address..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
       
        />
        </span>
        </p>    
        <p className="ptag">
        <span>
         <p className="icon2">
         <FaLock/>
         </p>

        <input
          className="input2"
          type="text"
          placeholder="Enter Your Password..."
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        
        />
        </span>
        </p>
        
        <p className="ptag">
        <span>
        <p className="icon3">
         <FaLock/>
        </p>
        <input  className="input3"
          type="text"
          placeholder="Confirm Password..."
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, confirmPassword: event.target.value })
          }
        />
        </span>
        </p> 
   
       </div>
   
    </div>
  );
}

export default SignUpInfo;