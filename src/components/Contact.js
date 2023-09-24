import React, { useRef } from 'react'
import '../css/contact.css'
import emailjs from '@emailjs/browser';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_1j0zsqu',
            'template_lwkno0c',
            form.current,
            '07JR3encgbXkIbhPY'
        )
            .then((result) => {
                console.log(result.text);
                alert('message sent');
            }, (error) => {
                console.log(error.text);
            }
            );
    };

    return (
        <div className='contact'>

            <h1>CONTACT ME </h1>

            <p>Lets Connect Together</p>


            <form ref={form} onSubmit={sendEmail}>

                <div className="form-container">

                    <div className="contact-info">

                        <input type="text"
                            placeholder='Name'
                            name="user_name"
                            id=""
                        />
                        <input type="email"
                            placeholder='Email'
                            name="user_email" id=""
                        />

                    </div>

                    <div className="contact-message">
                        <textarea name="message"

                            placeholder='Message Me'
                            id="" cols="30" rows="10">


                        </textarea>
                    </div>
                </div>


                <div className="form-submit">
                    <input type="submit" value="Send" />
                </div>
            </form>


            <div className="home-icons-container">
                <GitHub className="home-icons" />
                <LinkedIn className="home-icons" />
                <Twitter className="home-icons" />
                <Instagram className="home-icons" />

            </div>

            <div>
                <p>© Alao Abdulhaleem 2023</p>
            </div>
        </div>
    )
}

export default Contact