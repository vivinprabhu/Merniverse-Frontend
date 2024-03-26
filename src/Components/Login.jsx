import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import '../Assests/css/color.css'
import '../Assests/css/Signup.css'

import login from '../Assests/images/login.svg'

const Login = () => {
  
  const [data,setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {
      setData({...data,[event.target.name]:event.target.value});
  }

  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!data.email || !data.password){
      setError("Please fill all fields");
      return ;
    } 

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      console.log("Backend URL:", backendUrl);
      console.log(process.env);
      const { data: res } = await axios.post(`${backendUrl}api/auth`, data);
      console.log(res.message);
      localStorage.setItem("token",res.data);
      localStorage.setItem("name",res.name);
      localStorage.setItem("email",data.email);
      navigate("/home");  
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(error.response.data.message);
      }
    }
  };
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="right-container">
            <div className="image-container">
              <img src={login} alt='login'/>
            </div>
          </div>

          <div className="left-container">
            <div className="center-class">
              <form onSubmit={handleSubmit}>
                <div>
                  <h1><span>Merniverse</span> welcomes you back!</h1>
                </div>
                <div className="input-field-center">
                  <div className='input-field padd-15 '>
                    <input type='email' placeholder='Email' name='email' value={data.email} onChange={handleChange}/>
                  </div>
                  <div className='input-field padd-15'>
                    <input type='password' placeholder='Password' name='password' value={data.password} onChange={handleChange}/>
                  </div>
                <p>Forgot Password?</p>
                </div>
                <div style={{color:'red'}}>
                  {error}
                </div>
                <div className='btn padd-15'>
                  <button>Log in</button>
                </div>
                <div className="login-section padd-15">
                  New here? <span onClick={()=>{navigate("/signup")}}>Register here</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
