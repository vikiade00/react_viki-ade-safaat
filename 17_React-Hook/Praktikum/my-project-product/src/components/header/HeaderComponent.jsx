import React from 'react';
import BoostrapLogo from '../../assets/Bootstrap_logo.svg.png'
import './headerComponent.css'
const HeaderComponent = () => {
    return (
        <div className='header'>
            <img src={BoostrapLogo} alt="Boostrap Logo" width={70}/>
            <h1>Create Product</h1>
            <p className='text-header'>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
    );
}

export default HeaderComponent;
