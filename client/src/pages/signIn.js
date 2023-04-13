import React from "react";
import LOGIN from "../images/icon.jpg";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginInfo({ LogData, setLogData }) { 
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
           <div className="column1">
                  <button id="but1"
                  onClick={()=>{
                    navigateToLogin();
                   }
                   }>
                  Sign In</button>
           </div>
           <div className="column1">
            <button id="but1"
             onClick={()=>{
              navigateToSignUp();
             }
             }>Sign Up</button>
          </div>    
       </div>
      
      <div className="header">    
         <img  src= {LOGIN} className="image" ></img>
      </div>
    
      <p className="ptag">
        <span className="over1">        
            <p class="icon-5">
              <FaEnvelope/>
            </p>
      <input  
      className="input1"
      type="text"
      placeholder="Enter your Email Address..."
      value={LogData.email}
      onChange={(event) =>
        setLogData({ ...LogData, email: event.target.value })
      }
      />
      </span>
      </p>    
      <p className="ptag">
        <span >
        <p className="icon-6">
          <FaLock/>
        </p>
      <input
       className="input2"
       type="text"
       placeholder="Enter Your Password..."
       value={LogData.password}
       onChange={(event) =>
         setLogData({ ...LogData, password: event.target.value })
       }
      />
      </span>
      </p>  
     </div>
   
    </div>
  );
}

export default LoginInfo;