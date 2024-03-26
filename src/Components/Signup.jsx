  import React from 'react'
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import axios from 'axios';

  import '../Assests/css/color.css'
  import '../Assests/css/Signup.css'

  import signup from '../Assests/images/signup.svg'

  const Signup = () => {
    
    const [data,setData] = useState({
      email: "",
      name : "",
      password: ""
    })

    const [error,setError] = useState("");
    const navigate = useNavigate();

    const [agreedCheckbox,setAgreeCheckbox] = useState(false);

    const [msg,setMsg] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!data.name || !data.email || !data.password ||!agreedCheckbox) {
        setError("Please fill all fields and accept terms and conditions");
        return;
      }

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await axios.post(`${backendUrl}api/users`, data);
      setMsg(response.data.message)
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Email already exists!");
      } else {
        setError("Password was not strong! (Ensure one caps, one small, one special character and one number with minimum length of 8 characters)");
      }
    }
  };

  const handleChange = (event) => {
    if(event.target.name === 'checkbox'){
      setAgreeCheckbox(event.target.checked);
    }else{
      setData({...data,[event.target.name]:event.target.value});
    }
}

    return (
      <div>
        <div className="container">
          <div className="row">

            <div className="right-container">
              <div className="image-container">
                <img src={signup} alt='signup' />
              </div>
            </div>

            <div className="left-container">
              <div className="center-class">
                <form onSubmit={handleSubmit}>
                  <div>
                    <h1>Create your new <span>account!</span></h1>
                  </div>
                  <div className="input-field-center">
                    <div className='input-field padd-15 '>
                      <input type='email' placeholder='Email' name='email' value={data.email} onChange={handleChange}/>
                    </div>
                    <div className='input-field padd-15'>
                      <input type='text' placeholder='Name' name='name' value={data.name} onChange={handleChange}/>
                    </div>
                    <div className='input-field padd-15'>
                      <input type='password' placeholder='Password' name='password' value={data.password} onChange={handleChange}/>
                    </div>
                  </div>
                  {error && <div className="error" style={{color:'red'}}>{error}</div>}
                  {msg && <div className="error" style={{color:'green'}}>{msg}</div>}
                  <div className="padd-15">
                    <input type="checkbox" checked={agreedCheckbox} name='checkbox' value={data.checkbox} onChange={handleChange}/> <label htmlFor="agree-checkbox">By clicking, you agree to our <span onClick={()=>navigate('/terms-and-conditions')}>terms and conditions</span> and <span onClick={()=>navigate('/terms-and-conditions')}>privacy policy</span></label>
                  </div>

                  <div className='btn padd-15'>
                   <button>Sign up</button>
                  </div>
                  <div className="login-section padd-15">
                    Have an account? <span onClick={()=>{navigate("/login")}}>Log in now</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Signup
