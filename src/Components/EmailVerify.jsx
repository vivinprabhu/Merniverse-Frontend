import axios from 'axios';
import React,{ useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import '../Assests/css/EmailVerify.css'

const EmailVerify = () => {

  const [validUrl,setValidUrl] = useState(false);
  const param = useParams();

  useEffect(()=>{
    const verifyEmailUrl = async()=>{
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL;
            const url = `${backendUrl}api/users/${param.id}/verify/${param.token}`;

            const {data} = await axios.get(url);
            console.log(data);
            setValidUrl(true);            
        } catch (error) {
            console.log(error);
            setValidUrl(false);            
        }
    };
    verifyEmailUrl()
  },[param])

  return (
    <Fragment>

        {validUrl ? 
        
        (

        <div className='email-success'>
        <p>Email verified successfully</p>
        <div className='btn padd-15'>
          <button onClick={()=>{window.open('/login', '_blank') }}>Log in</button>
        </div>
      </div>
        ) :    
        
        (      
          <div className='email-success'>  
            <p>Error 404 page</p>
          </div>
        )
      
      }
    </Fragment>
  )
}

export default EmailVerify;