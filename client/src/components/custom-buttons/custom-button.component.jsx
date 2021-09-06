import React from 'react';
import './custom-button.scss';

const CustomButton = ({ label, onClick }) => (
    <button className={`${label.toLowerCase()}-button custom-button`} onClick={onClick} >
        {label}
    </button>
);

export default CustomButton;