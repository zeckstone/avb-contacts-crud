import React from 'react';
import './custom-input.scss';

const CustomInput = ({ label, customClass, name, isVisible }) => (
    <div className={`custom-input-container`} >
        <label className={`${customClass}-label custom-input-label`}>{label}</label>
        <br />
        {
            isVisible && (<input value={name} className={`${customClass}-input custom-input`} />)
        }
    </div>
);

export default CustomInput;