import React from 'react';
import InputForm from '../../components/InputForm';
import MyButton from '../../components/MyButton';
import './contact.css'
const Contact = () => {
    return (
        <div className="background">
        <div className='contactPage'>
            <div className="cardContact">
                <h2 style={{textAlign:"center"}}>Contact</h2>
                <form action="">
                    <div className="formControl">
                        <label htmlFor="name">Your Name</label>
                        <InputForm/>
                    </div>
                    <div className="formControl">
                        <label htmlFor="email">Your Email</label>
                        <InputForm/>
                    </div>
                    <div className="formControl">
                        <label htmlFor="message">Message</label>
                        <textarea className='inputMessage' name="" id="" cols="44" rows="10"></textarea>
                    </div>
                    <MyButton href="http://localhost:5173/about" content="Send"/>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Contact;
