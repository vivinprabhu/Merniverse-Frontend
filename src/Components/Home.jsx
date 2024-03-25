import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import logo from '../Assests/images/logo.png'

import '../Assests/css/Home.css'
import '../Assests/css/color.css'

import WatchVideo from '../Components/WatchVideo';
import Reference from '../Components/Reference';
import QuizInstructions from './QuizInstructions';
import Quiz from './Quiz';

const Home = () => {

  const navigate = useNavigate(); 

  const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      navigate("/");   
      window.location.reload();
  }

  const [activeContent , setActiveContent] = useState("video");

  const handleClickMenu = (content) => {
      setActiveContent(content);
  }

  return (
    <div>
      <div className='home-main-container'>
        <div className="sidebar">
          <div className="logo">
            <img src={logo} alt="logo" className='image-logo'/>
          </div>
          
          <div className="sidebar-contents">
          <ul>
            <li onClick={()=>handleClickMenu('video')}><i class="material-icons">play_circle_filled</i> <p>Watch Video</p></li>
            <li onClick={()=>handleClickMenu('reference')}><i class="material-icons">picture_as_pdf</i> <p>Reference</p></li>
            <li onClick={()=>handleClickMenu('quizinstructions')}><i class="material-icons">info</i><p>Quiz Instructions</p></li>
            <li onClick={()=>handleClickMenu('quiz')}><i class="material-icons">assignment</i><p>Quiz</p></li>  
          </ul>

          <div>
            <ul style={{position: 'relative' ,top:'-15px'}}>
              <li onClick={handleLogout}><i class="material-icons">logout</i><p>Logout</p></li>
            </ul>
           </div>
          </div>
        </div>

        <div className='home-contents'>
          {activeContent === 'video' && <WatchVideo/>}
          {activeContent === 'reference' && <Reference/>}
          {activeContent === 'quizinstructions' && <QuizInstructions/>}
          {activeContent === 'quiz' && <Quiz/>}
        </div>

      </div>
    </div>
  )
}

export default Home
