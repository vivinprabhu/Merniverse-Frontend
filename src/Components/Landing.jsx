import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

import '../Assests/css/color.css'
import '../Assests/css/Landing.css'

import logo from '../Assests/images/logo.png'
import homeImg from '../Assests/images/land-image.png'

import mongoDB from '../Assests/images/mongoDB.png'
import expressJS from '../Assests/images/expressJS.png'
import reactJS from '../Assests/images/reactJS.png'
import nodeJS from '../Assests/images/nodejs.png'

import git from '../Assests/images/git.png'
import github from '../Assests/images/github.png'
import postman from '../Assests/images/postman.png'
import npm from '../Assests/images/npm.png'

import flow from '../Assests/images/flow.avif'

const Landing = () => {
    const navigate = useNavigate('/login');

    useEffect(() => {
        window.addEventListener('scroll', reveal);
        return () => {
            window.removeEventListener('scroll', reveal);
        };
    }, []);
    
    const reveal = () => {
        var reveals = document.querySelectorAll('.reveal');

        for(var i=0;i<reveals.length;i++)
        {
            var windowHeight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowHeight - revealpoint)
            {
                reveals[i].classList.add('active');
            }
            else
            {
                reveals[i].classList.remove('active');
            }
        }
    }

    const[token,setToken] = useState(false);

    useEffect(()=>{
        const t = localStorage.getItem("token");
        setToken(!!t)
    },[token]);

    const handleLogout =()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        navigate('/');
        window.location.reload();
    }

  return (
    <div>
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="logo" className='image-logo'/>
            </div>

            <div className="nav-contents">
                <ul>
                    <li>  <a href='#home'> Home</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                    {token ? (
                    <li onClick={handleLogout}>Logout</li>
                    ):(
                    <li onClick={()=>navigate('/login')}>Login</li>

                    )}
                </ul>
            </div>
        </div>

        <div className='home-main-container'>
            <section className='section section-1 margin-adjust' id='home'>
                <div className="row">
                    <div className="landingImg">
                        <img src={homeImg} alt='homeImg'/>
                    </div>

                    <div className="landing-content">
                        <div className="landing-content-container">
                            <h1>MERN STACK DEVELOPMENT</h1>
                            <p>MERN, is crucial in modern web development due to its versatility and efficiency in building full-stack applications. Its seamless integration of JavaScript technologies enables rapid development, scalability, and real-time data processing, making it a preferred choice for developers aiming for robust, dynamic web solutions.</p>
                            <div className="btn padd-15">
                                <button onClick={()=>navigate('/login')}>Get started <i class="material-icons">north_east</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section-2 margin-adjust reveal'>
                <div className="section-2-title">
                    <h1>OUR OFFERINGS</h1>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="section-2-image">
                            <img src={mongoDB} alt='mongoDb'/>
                        </div>
                        <div className="section-2-sub-title">
                            <h3>MongoDB</h3>
                        </div>
                        <div className="section-2-text">
                            <p>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's known for its scalability and flexibility, making it suitable for handling large volumes of data and varied data types. MongoDB is schema-less, allowing for quick iteration and adaptation to changing requirements. MongoDB's support for horizontal scaling through sharding is a key feature.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="section-2-image">
                            <img src={expressJS} alt='expressJS'/>
                        </div>
                        <div className="section-2-sub-title">
                            <h3>ExpressJS</h3>
                        </div>
                        <div className="section-2-text">
                            <p>Express.js is a minimalist web application framework for Node.js. It provides a robust set of features for building web and mobile applications. With Express.js, developers can create APIs, handle middleware, manage routes, and perform various server-side tasks efficiently. Its simplicity and flexibility make it a popular choice for building back-end applications.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="section-2-image">
                            <img src={reactJS} alt='react'/>
                        </div>
                        <div className="section-2-sub-title">
                            <h3>ReactJS</h3>
                        </div>
                        <div className="section-2-text">
                            <p>React is a JavaScript library for building user interfaces. It enables developers to create reusable UI components that efficiently update and render when data changes. React follows a component-based architecture, allowing for a declarative and efficient approach to building complex user interfaces. Its virtual DOM and one-way data flow contribute to its performance and scalability.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="section-2-image">
                            <img src={nodeJS} alt='nodeJS'/>
                        </div>
                        <div className="section-2-sub-title">
                            <h3>NodeJS</h3>
                        </div>
                        <div className="section-2-text">
                            <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside the web browser. It provides a powerful platform for building scalable and high-performance server-side applications. Node.js uses an event-driven, non-blocking I/O model, making it suitable for building real-time applications and handling concurrent requests efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section-4 margin-adjust reveal'>
                <div className="section-2-title">
                    <h1>TOOLS & TECHNOLOGIES</h1>
                </div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={mongoDB} alt='mongoDB'/>
                        </div>
                        <div className="slide">
                            <img src={expressJS} alt='expressJS'/>
                        </div>
                        <div className="slide">
                            <img src={reactJS} alt='reactJS'/>
                        </div>
                        <div className="slide">
                            <img src={nodeJS} alt='nodeJS'/>
                        </div>
                        <div className="slide">
                            <img src={mongoDB} alt='mongoDB'/>
                        </div>
                        <div className="slide">
                            <img src={expressJS} alt='expressJS'/>
                        </div>
                        <div className="slide">
                            <img src={reactJS} alt='reactJS'/>
                        </div>
                        <div className="slide">
                            <img src={nodeJS} alt='nodeJS'/>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={git} alt='git'/>
                        </div>
                        <div className="slide">
                            <img src={github} alt='github'/>
                        </div>
                        <div className="slide">
                            <img src={postman} alt='postman'/>
                        </div>
                        <div className="slide">
                            <img src={npm} alt='npm'/>
                        </div>
                        <div className="slide">
                            <img src={git} alt='git'/>
                        </div>
                        <div className="slide">
                            <img src={github} alt='github'/>
                        </div>
                        <div className="slide">
                            <img src={postman} alt='postman'/>
                        </div>
                        <div className="slide">
                            <img src={npm} alt='npm'/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section section-3 margin-adjust reveal' id='services'>
                <div className="section-2-title">
                    <h1>MERN SERVICES</h1>
                </div>
                <div className="services-1">
                    <div className="service-list">
                        <i class="material-icons">volunteer_activism</i>
                        <h3> Beginner Friendly</h3>
                    </div>
                    <div className="service-list">
                        <i class="material-icons">tips_and_updates</i>
                        <h3> Learn Modern Ideas </h3>
                    </div>
                    <div className="service-list">
                        <i class="material-icons">work_outline</i>
                        <h3> Building and Managing Projects </h3>
                    </div>
                </div>
                <div className="services-1">
                <div className="service-list">
                        <i class="material-icons">groups</i>
                        <h3> Community Support </h3>
                    </div>
                    <div className="service-list">
                        <i class="material-icons">desktop_windows</i>
                        <h3> Optimizing App Performance </h3>
                    </div>
                    <div className="service-list">
                        <i class="material-icons">all_inclusive</i>
                        <h3> Custom Solutions </h3>
                    </div>
                </div>
            </section>

            <section className='section section-4 margin-adjust reveal'>
            <div className="section-2-title">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div className="faq" id='faq'>
                <details>
                    <summary>Is MERN a full-stack solution?</summary>
                    <p>Yes, MERN is a full-stack, following the traditional 3-tier architectural pattern, including the front-end display tier (React.js), application tier (Express.js and Node.js), and database tier (MongoDB).</p>
                </details>
                <details>
                    <summary>What are the benefits of building applications using MERN web development?</summary>
                    <p>Covers complete web development cycle from frontend to backend with JS. Supports MVC architecture for a smooth development process. As it is a JavaScript stack, developers can only be pro in JSON and JavaScript. Combination of the best technologies – MongoDB, React, Node.js and Express.js.</p>
                </details>
                <details>
                    <summary>What is MERN Stack Development?</summary>
                    <p>MERN is a popular JavaScript stack used for the process of development. MERN Stack is a combination of the latest technologies used for creating premium web applications. These applications are developed using multiple frameworks, databases, libraries, and more. It comprises several open-source components such as MongoDB, React, Node.js, and Express.js. These components help provide end-to-end framework support to developers.</p>
                </details>
                <details>
                    <summary>Is MERN stack flexible?</summary>
                    <p>MERN stack development is flexible. If you write code for Node and decide it’s better placed in ReactJS, you can move it over with ease, and it's almost certain to run the same way. This flexibility makes developing MEAN-based apps significantly easier.</p>
                </details>
                <details>
                    <summary>What are the use cases of MERN?</summary>
                    <p>Like any web stack, you can build whatever you want in MERN — though it’s ideally suited for cases that are JSON-heavy, cloud-native, and that have dynamic web interfaces.</p>
                </details>
                <details>
                    <summary>Why we choose MERN?</summary>
                    <p>The MERN stack is favored by web developers due to its seamless integration of MongoDB, Express.js, React.js, and Node.js, facilitating efficient development of full-stack applications with JSON data flow, simplified debugging, and the advantage of utilizing a single programming language.</p>
                </details>
                <details>
                    <summary>How does the MERN stack work?</summary>
                    <p>The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.</p>
                    <img src={flow} alt='flow'/>
                </details>
                <details>
                    <summary>Is MERN Stack developer in demand?</summary>
                    <p>In conclusion, the MERN stack remains in high demand in the web development industry due to its versatility, open-source nature, and scalability. If you're looking to learn MERN stack and become a proficient developer, here is your platform.</p>
                </details>
            </div>
            </section>

            <footer>
                <h1>Get in Touch !</h1>
                <div className="footer">
                    <div className="footer-1">
                        <h3>Refer</h3>
                        <h4><a href='#home'>Home</a></h4>
                        <h4><a href='#faq'>FAQ</a></h4>
                        <h4 onClick={()=>navigate('/terms-and-conditions')}><a href='#1'>Terms and Conditions</a></h4>
                        <h4  onClick={()=>navigate('/terms-and-conditions')}><a href='#2'>Privacy Policy</a></h4>
                    </div>
                    <div className="footer-1">
                        <h3>About me</h3>
                        <h4> <a href='https://vivinprabhu.github.io/Portfolio/' target="_blank" rel="noopener noreferrer">Developer</a></h4>
                        <h4> <a href='mailTo:cseskct255vivinprabhu.s@gmail.com'>Contact</a></h4>
                    </div>
                    <div className="footer-1">
                        <h3>Getting started</h3>
                        <h4> <a href='https://www.mongodb.com/docs/manual/tutorial/getting-started/' target="_blank" rel="noopener noreferrer">MongoDB</a></h4>
                        <h4> <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer">ExpressJS</a></h4>
                        <h4> <a href='https://legacy.reactjs.org/docs/getting-started.html' target="_blank" rel="noopener noreferrer">ReactJS</a></h4>
                        <h4> <a href='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' target="_blank" rel="noopener noreferrer">NodeJS</a></h4>
                    </div>
                    <div className="footer-1">
                        <h3>Community</h3>
                        <h4> <a href='https://github.com/topics/mern-stack' target="_blank" rel="noopener noreferrer">Github</a></h4>
                        <h4> <a href='https://www.linkedin.com/company/mern-stack-community' target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
                        <h4> <a href='https://stackoverflow.com/questions/tagged/mern' target="_blank" rel="noopener noreferrer">Stack Overflow</a></h4>
                        <h4> <a href='https://youtu.be/I7EDAR2GRVo' target="_blank" rel="noopener noreferrer">YouTube</a></h4>
                        <h4> <a href='https://www.reddit.com/r/learnjavascript/comments/92mxrx/best_path_for_learning_the_mern_stack/' target="_blank" rel="noopener noreferrer">Reddit</a></h4>
                        <h4> <a href='https://twitter.com/search?q=%23mern&src=typed_query&f=top' target="_blank" rel="noopener noreferrer">X</a></h4>
                    </div>
                    <div className="footer-1">
                        <h3>Documentation</h3>
                        <h4> <a href='https://www.mongodb.com/docs/' target="_blank" rel="noopener noreferrer">MongoDB</a></h4>
                        <h4> <a href='https://expressjs.com/' target="_blank" rel="noopener noreferrer">ExpressJS</a></h4>
                        <h4> <a href='https://legacy.reactjs.org/docs/getting-started.html' target="_blank" rel="noopener noreferrer">ReactJS</a></h4>
                        <h4> <a href='https://nodejs.org/docs/latest/api/' target="_blank" rel="noopener noreferrer">NodeJS</a></h4>
                    </div>
                </div>
                <div className="copyright">
                    <i class="material-icons">copyright</i> 2024 Merniverse
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Landing