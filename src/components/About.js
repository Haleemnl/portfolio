import React from 'react'
import '../css/about.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>

            <h1>About me</h1>

            <div className="about-container">

                {/* about text */}
                <div className="about-text">
                    {/* front end dev */}
                    <div className="about-dev">
                        <h2>Front End Developer</h2>

                        <p> Seasoned and independent Front End Developer with 2 years of experiencs in
                            blending the art of design with skills of programming to deliver an immersive and engaging
                            user experience through efficient website development, productive feature optimization, and
                            relentless debugging, Very passionate about UI designs.  I am skilled in converting design mockups into responsive web pages and implementing cross-browser compatibility. I am also experienced in optimizing web applications for fast loading times and accessibility compliance. In my free time, I enjoy exploring new technologies and contributing to open-source projects. I am passionate about creating elegant solutions to complex problems and look forward to collaborating with like-minded individuals in the industry.


                        </p>

                    </div>

                    {/* information */}
                    <div className="about-info">
                        <h2>Personal Informations</h2>
                        <br />
                        <p>Name: Alao Abdulhaleem</p>
                        <br />
                        <p>Nationalty: Nigerian</p>
                        <br />
                        <p>Skills: Front end development</p>
                        <br />
                        <p>Work experience: I work presently as a freelance developer</p>

                    </div>
                </div>

                {/* 2nd div About image */}
                <div className="about-image">
                    <div className="about-image-content">
                        <div><img src="/images/html.webp" alt="" /></div>
                        <div><img src="/images/css.webp" alt="" /></div>
                        <div><img src="/images/js.webp" alt="" /></div>
                        <div><img src="/images/react.webp" alt="" /></div>
                        {/* <img src="/images/haleem-logo.jpeg" alt="" /> */}
                    </div>
                </div>
            </div>

            <div className="about-resume">
                <Link to='https://drive.google.com/file/d/1dOTQ1VezdH_KjDYF0TSahhUgLHkIKAWC/view?usp=drive_link' download>
                    Check My Resume ↗
                </Link>

            </div>

            <h1>My Skill sets</h1>

            <div className="about-skills-container">

                <div className="about-skills-contents">
                    <div className="about-skills">
                        <img src="/images/html.webp" alt="" />
                        <p>HTML</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/css.webp" alt="" />
                        <p>CSS</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/js.webp" alt="" />
                        <p>javascript</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/react.webp" alt="" />
                        <p>React.js</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/typescript.webp" alt="" />
                        <p>Typescript</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/bootstrap.webp" alt="" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/tailwind.webp" alt="" />
                        <p>Tailwind Css</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/next-js.webp" alt="" />
                        <p>Next.js</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/firebase.webp" alt="" />
                        <p>Firebase</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/git.webp" alt="" />
                        <p>Git</p>
                    </div>
                    <div className="about-skills">
                        <img src="/images/github.webp" alt="" />
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About