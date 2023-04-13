import React, { Component ,useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';


const Protected = (props) => {
    const {Component}=props;
    const navigate=useNavigate();
   useEffect(()=>{
        let login=localStorage.getItem("login");
        if(!login){
            navigate('/log-in')
        }
    });
  return (
    <>
    <Component/>
    </>
  );
};

export default Protected;