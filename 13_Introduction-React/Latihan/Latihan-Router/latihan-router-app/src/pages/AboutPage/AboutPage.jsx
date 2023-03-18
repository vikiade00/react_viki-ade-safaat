import React from 'react';
import MyButton from '../../components/MyButton';
import './aboutPage.css'
import imageProfile from '../../assets/programmer-6853610-5625725.png'
const AboutPage = () => {
    return (
            <div className="cardAbout">
            <img className='imgProfile' src={imageProfile} alt="image profile" />
            <h2>About Me</h2>
            <p><b>Hallo, Saya Viki Ade S</b> | <span className='spanFe'>Front End Developer</span></p> 
            <p style={{marginBottom : 20}}> 
            Saya merupakan anak ke dua dari dua bersaudara. 
            Saya lahir di bandung,  Untuk saat ini saya sedang menempuh pendidikan di Bandung yaitu STMIK Mardira Indonesia.
            Latar belakang saya adalah seorang Front-End Developer, melakukan kegiatan coding merupakan kesukaan saya.
            </p>
            <MyButton href="http://localhost:5173/contact" content="Contact Me"/>
            <MyButton href="http://localhost:5173/" content="Home"/>
            </div>
    );
}

export default AboutPage;
