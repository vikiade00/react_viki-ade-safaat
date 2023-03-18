import React from 'react';
import './myButton.css'
const MyButton = (props) => {
    return (
        <a href={props.href} className='myButton'>{props.content}</a>
        );
}

export default MyButton;
