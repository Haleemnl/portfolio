import React from 'react'
import '../css/home.css'
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import About from './About'
import Particlebg from './Particlebg'
import { Link } from 'react-router-dom'



const Home = () => {

    return (

        <div className="home">

            <div className="home-container">

                <div className="home-content">

                    {/* <Particlebg /> */}


                    <div className="home-icons-container">
                        <GitHub className="home-icons" />
                        <LinkedIn className="home-icons" />
                        <Twitter className="home-icons" />
                        <Instagram className="home-icons" />

                    </div>

                    <h1>Hi, i am <span>Alao Abdulhaleem. </span></h1>
                    <p>
                        I am a front end Developer with passion for building scalable and user-friendly web applications
                        and a Freelance Web Designer, Experienced in designing and developing websites,
                        Well-versed in technology and writing code to create systems that are reliable and user-friendly.
                    </p>

                    <Link to='/projects'>
                        <button>View my projects ↗</button>
                    </Link>

                </div>


                <div className="home-image">
                    <img src="/images/haleem-logo.webp" alt="" />

                </div>
            </div>
        </div>



    )
}

export default Home