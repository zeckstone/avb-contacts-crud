import React from 'react';

const CustomButton = ({ label, onClick }) => (
    <button className={`${label}-button custom-button`} onClick={onClick} >
        {label}
    </button>
);

export default CustomButton;