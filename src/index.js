import React from 'react';
import ReactDOM from 'react-dom/client';

import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import TermsAndConditions from './Components/TermsAndConditions';


import{BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import EmailVerify from './Components/EmailVerify';

export default function RouteApp(){
   
    const user = localStorage.getItem("token");
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/users/:id/verify/:token" element={<EmailVerify />}></Route>
                <Route path="/signup" element={user ? (<Navigate to='/home' replace/>) : <Signup/>}></Route>
                <Route path="/login" element={user? (<Navigate to='/home' replace/>) : <Login/>}></Route>
                {user && <Route path="/home" element={<Home/>}></Route>}

                <Route path="/terms-and-conditions" element={<TermsAndConditions/>}></Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);